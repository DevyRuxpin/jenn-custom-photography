// Shopify Product Types
export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  images: {
    edges: Array<{
      node: {
        id: string;
        url: string;
        altText: string | null;
        width: number;
        height: number;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
        availableForSale: boolean;
        image: {
          url: string;
          altText: string | null;
        } | null;
      };
    }>;
  };
}

export interface ShopifyCollection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image: {
    url: string;
    altText: string | null;
  } | null;
  products: {
    edges: Array<{
      node: ShopifyProduct;
    }>;
  };
}

// Custom Photo Service Types
export interface PhotoService {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  category: 'restoration' | 'editing' | 'creative' | 'printing';
  estimatedTime: string;
  features: string[];
  examples: string[];
}

export interface CustomPhotoRequest {
  id: string;
  serviceType: PhotoService['category'];
  description: string;
  uploadedImages: File[];
  requirements: string;
  deliveryFormat: 'digital' | 'print' | 'both';
  urgency: 'standard' | 'rush' | 'express';
  createdAt: Date;
  status: 'pending' | 'in-progress' | 'completed' | 'delivered';
}

// UI Component Types
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface CartItem {
  productId: string;
  variantId: string;
  quantity: number;
  title: string;
  price: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  currency: string;
}
