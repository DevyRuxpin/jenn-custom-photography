import { storefrontClient } from './shopify';
import { CartItem } from '../types';

// Shopify Checkout Mutations
const CREATE_CHECKOUT_MUTATION = `
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
        webUrl
        totalTaxV2 {
          amount
          currencyCode
        }
        subtotalPriceV2 {
          amount
          currencyCode
        }
        totalPriceV2 {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        field
        message
      }
    }
  }
`;

const ADD_LINE_ITEMS_MUTATION = `
  mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!) {
    checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        id
        webUrl
        totalPriceV2 {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          edges {
            node {
              id
              title
              quantity
            }
          }
        }
      }
      checkoutUserErrors {
        field
        message
      }
    }
  }
`;

export interface CheckoutResponse {
  checkoutId: string;
  webUrl: string;
  totalPrice: number;
  currency: string;
  errors?: string[];
}

// Create a new checkout with cart items
export const createCheckout = async (cartItems: CartItem[]): Promise<CheckoutResponse> => {
  try {
    // Convert cart items to Shopify line items
    const lineItems = cartItems.map(item => ({
      variantId: item.variantId,
      quantity: item.quantity,
    }));

    const response = await storefrontClient.request(CREATE_CHECKOUT_MUTATION, {
      variables: {
        input: {
          lineItems,
        },
      },
    });

    if (response.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
      const errors = response.data.checkoutCreate.checkoutUserErrors.map(
        (error: any) => error.message
      );
      throw new Error(`Checkout errors: ${errors.join(', ')}`);
    }

    const checkout = response.data?.checkoutCreate?.checkout;
    if (!checkout) {
      throw new Error('Failed to create checkout');
    }

    return {
      checkoutId: checkout.id,
      webUrl: checkout.webUrl,
      totalPrice: parseFloat(checkout.totalPriceV2.amount),
      currency: checkout.totalPriceV2.currencyCode,
    };
  } catch (error) {
    console.error('Error creating checkout:', error);
    throw error;
  }
};

// Add items to existing checkout
export const addItemsToCheckout = async (
  checkoutId: string,
  cartItems: CartItem[]
): Promise<CheckoutResponse> => {
  try {
    const lineItems = cartItems.map(item => ({
      variantId: item.variantId,
      quantity: item.quantity,
    }));

    const response = await storefrontClient.request(ADD_LINE_ITEMS_MUTATION, {
      variables: {
        checkoutId,
        lineItems,
      },
    });

    if (response.data?.checkoutLineItemsAdd?.checkoutUserErrors?.length > 0) {
      const errors = response.data.checkoutLineItemsAdd.checkoutUserErrors.map(
        (error: any) => error.message
      );
      throw new Error(`Checkout errors: ${errors.join(', ')}`);
    }

    const checkout = response.data?.checkoutLineItemsAdd?.checkout;
    if (!checkout) {
      throw new Error('Failed to add items to checkout');
    }

    return {
      checkoutId: checkout.id,
      webUrl: checkout.webUrl,
      totalPrice: parseFloat(checkout.totalPriceV2.amount),
      currency: checkout.totalPriceV2.currencyCode,
    };
  } catch (error) {
    console.error('Error adding items to checkout:', error);
    throw error;
  }
};

// Redirect to Shopify checkout
export const redirectToCheckout = (webUrl: string) => {
  window.location.href = webUrl;
};

// Create checkout and redirect
export const checkoutCart = async (cartItems: CartItem[]): Promise<void> => {
  try {
    if (cartItems.length === 0) {
      throw new Error('Cart is empty');
    }

    const checkout = await createCheckout(cartItems);
    redirectToCheckout(checkout.webUrl);
  } catch (error) {
    console.error('Checkout error:', error);
    throw error;
  }
};
