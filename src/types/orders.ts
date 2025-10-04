export interface OrderItem {
  id: string;
  name: string;
  service: string;
  quantity: number;
  price: number;
  image?: string;
  description?: string;
}

export interface OrderStatus {
  status: 'pending' | 'confirmed' | 'in-progress' | 'review' | 'completed' | 'delivered' | 'cancelled';
  timestamp: Date;
  message: string;
  updatedBy: 'system' | 'admin' | 'customer';
}

export interface OrderTracking {
  id: string;
  orderNumber: string;
  status: OrderStatus['status'];
  estimatedCompletion?: Date;
  actualCompletion?: Date;
  progress: number; // 0-100
  statusHistory: OrderStatus[];
  lastUpdated: Date;
}

export interface CustomOrder {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  currency: string;
  status: OrderStatus['status'];
  tracking: OrderTracking;
  createdAt: Date;
  updatedAt: Date;
  serviceType: 'restoration' | 'editing' | 'creative' | 'printing';
  urgency: 'standard' | 'rush' | 'express';
  description: string;
  specialInstructions?: string;
  deliveryFormat: 'digital' | 'print' | 'both';
  photos: {
    id: string;
    url: string;
    name: string;
    uploadedAt: Date;
  }[];
  deliverables?: {
    id: string;
    url: string;
    name: string;
    type: 'image' | 'video' | 'document';
    deliveredAt: Date;
  }[];
}

export interface OrderUpdate {
  orderId: string;
  status: OrderStatus['status'];
  message: string;
  estimatedCompletion?: Date;
  progress?: number;
  files?: {
    url: string;
    name: string;
    type: 'image' | 'video' | 'document';
  }[];
}

export interface OrderFilters {
  status?: OrderStatus['status'];
  serviceType?: CustomOrder['serviceType'];
  dateRange?: {
    start: Date;
    end: Date;
  };
  search?: string;
}

export interface OrderStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  cancelled: number;
  totalRevenue: number;
  averageOrderValue: number;
}
