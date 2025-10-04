// Modern analytics utility for 2025
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
  
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface EcommerceEvent {
  event: string;
  ecommerce: {
    transaction_id?: string;
    value?: number;
    currency?: string;
    items?: Array<{
      item_id: string;
      item_name: string;
      category: string;
      quantity: number;
      price: number;
    }>;
  };
}

// Initialize Google Analytics
export const initializeAnalytics = (trackingId: string) => {
  if (typeof window === 'undefined') return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer!.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', trackingId, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('config', 'GA_TRACKING_ID', {
    page_path: path,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  });
};

// Track ecommerce events
export const trackEcommerceEvent = (event: EcommerceEvent) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', event.event, event.ecommerce);
};

// Track user interactions
export const trackUserInteraction = {
  // Product interactions
  viewItem: (productId: string, productName: string, category: string, price: number) => {
    trackEvent({
      action: 'view_item',
      category: 'ecommerce',
      label: productId,
      value: price,
    });

    trackEcommerceEvent({
      event: 'view_item',
      ecommerce: {
        items: [{
          item_id: productId,
          item_name: productName,
          category,
          quantity: 1,
          price,
        }],
      },
    });
  },

  addToCart: (productId: string, productName: string, category: string, price: number, quantity: number = 1) => {
    trackEvent({
      action: 'add_to_cart',
      category: 'ecommerce',
      label: productId,
      value: price * quantity,
    });

    trackEcommerceEvent({
      event: 'add_to_cart',
      ecommerce: {
        items: [{
          item_id: productId,
          item_name: productName,
          category,
          quantity,
          price,
        }],
      },
    });
  },

  removeFromCart: (productId: string, _productName: string, _category: string, price: number) => {
    trackEvent({
      action: 'remove_from_cart',
      category: 'ecommerce',
      label: productId,
      value: price,
    });
  },

  beginCheckout: (items: Array<{id: string, name: string, category: string, quantity: number, price: number}>) => {
    trackEvent({
      action: 'begin_checkout',
      category: 'ecommerce',
      value: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    });

    trackEcommerceEvent({
      event: 'begin_checkout',
      ecommerce: {
        items: items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          category: item.category,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    });
  },

  purchase: (transactionId: string, value: number, currency: string, items: Array<{id: string, name: string, category: string, quantity: number, price: number}>) => {
    trackEvent({
      action: 'purchase',
      category: 'ecommerce',
      label: transactionId,
      value,
    });

    trackEcommerceEvent({
      event: 'purchase',
      ecommerce: {
        transaction_id: transactionId,
        value,
        currency,
        items: items.map(item => ({
          item_id: item.id,
          item_name: item.name,
          category: item.category,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    });
  },

  // Custom order interactions
  startCustomOrder: () => {
    trackEvent({
      action: 'start_custom_order',
      category: 'engagement',
      label: 'custom_order_form',
    });
  },

  uploadPhotos: (photoCount: number) => {
    trackEvent({
      action: 'upload_photos',
      category: 'engagement',
      label: 'photo_upload',
      value: photoCount,
    });
  },

  submitCustomOrder: (serviceType: string, urgency: string, totalValue: number) => {
    trackEvent({
      action: 'submit_custom_order',
      category: 'engagement',
      label: `${serviceType}_${urgency}`,
      value: totalValue,
    });
  },

  // User authentication
  login: (method: string = 'email') => {
    trackEvent({
      action: 'login',
      category: 'engagement',
      label: method,
    });
  },

  register: (method: string = 'email') => {
    trackEvent({
      action: 'sign_up',
      category: 'engagement',
      label: method,
    });
  },

  logout: () => {
    trackEvent({
      action: 'logout',
      category: 'engagement',
    });
  },

  // Navigation and engagement
  viewPortfolio: (portfolioItem?: string) => {
    trackEvent({
      action: 'view_portfolio',
      category: 'engagement',
      label: portfolioItem,
    });
  },

  contactForm: () => {
    trackEvent({
      action: 'contact_form',
      category: 'engagement',
      label: 'contact_submission',
    });
  },

  downloadFile: (fileType: string, _fileName: string) => {
    trackEvent({
      action: 'file_download',
      category: 'engagement',
      label: fileType,
    });
  },
};

// Performance tracking
export const trackPerformance = {
  pageLoad: (pageName: string, loadTime: number) => {
    trackEvent({
      action: 'page_load_time',
      category: 'performance',
      label: pageName,
      value: Math.round(loadTime),
    });
  },

  imageLoad: (imageUrl: string, loadTime: number) => {
    trackEvent({
      action: 'image_load_time',
      category: 'performance',
      label: imageUrl,
      value: Math.round(loadTime),
    });
  },
};

// Error tracking
export const trackError = (error: Error, context?: string) => {
  trackEvent({
    action: 'error',
    category: 'technical',
    label: context || 'unknown',
  });

  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Analytics Error:', error, 'Context:', context);
  }
};
