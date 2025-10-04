import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CustomOrder, OrderUpdate, OrderStats, OrderFilters } from '../types/orders';

// Order Context Types
interface OrderState {
  orders: CustomOrder[];
  currentOrder: CustomOrder | null;
  stats: OrderStats | null;
  isLoading: boolean;
  error: string | null;
  filters: OrderFilters;
}

// Order Actions
type OrderAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_ORDERS'; payload: CustomOrder[] }
  | { type: 'SET_CURRENT_ORDER'; payload: CustomOrder | null }
  | { type: 'UPDATE_ORDER'; payload: OrderUpdate }
  | { type: 'ADD_ORDER'; payload: CustomOrder }
  | { type: 'SET_STATS'; payload: OrderStats }
  | { type: 'SET_FILTERS'; payload: Partial<OrderFilters> }
  | { type: 'CLEAR_ERROR' };

// Initial State
const initialState: OrderState = {
  orders: [],
  currentOrder: null,
  stats: null,
  isLoading: false,
  error: null,
  filters: {},
};

// Order Reducer
const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'SET_ORDERS':
      return { ...state, orders: action.payload, isLoading: false };
    case 'SET_CURRENT_ORDER':
      return { ...state, currentOrder: action.payload };
    case 'UPDATE_ORDER':
      const updatedOrders = state.orders.map(order =>
        order.id === action.payload.orderId
          ? {
              ...order,
              status: action.payload.status,
              updatedAt: new Date(),
              tracking: {
                ...order.tracking,
                status: action.payload.status,
                progress: action.payload.progress || order.tracking.progress,
                estimatedCompletion: action.payload.estimatedCompletion,
                lastUpdated: new Date(),
                statusHistory: [
                  ...order.tracking.statusHistory,
                  {
                    status: action.payload.status,
                    timestamp: new Date(),
                    message: action.payload.message,
                    updatedBy: 'admin'
                  }
                ]
              },
              deliverables: action.payload.files ? [
                ...(order.deliverables || []),
                ...action.payload.files.map(file => ({
                  id: Date.now().toString(),
                  url: file.url,
                  name: file.name,
                  type: file.type,
                  deliveredAt: new Date()
                }))
              ] : order.deliverables
            }
          : order
      );
      return {
        ...state,
        orders: updatedOrders,
        currentOrder: state.currentOrder?.id === action.payload.orderId
          ? updatedOrders.find(o => o.id === action.payload.orderId) || null
          : state.currentOrder
      };
    case 'ADD_ORDER':
      return { ...state, orders: [action.payload, ...state.orders] };
    case 'SET_STATS':
      return { ...state, stats: action.payload };
    case 'SET_FILTERS':
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

// Context Interface
interface OrderContextType {
  state: OrderState;
  fetchOrders: () => Promise<void>;
  fetchOrder: (orderId: string) => Promise<void>;
  updateOrderStatus: (orderId: string, update: Omit<OrderUpdate, 'orderId'>) => Promise<void>;
  createOrder: (orderData: Omit<CustomOrder, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt' | 'tracking'>) => Promise<void>;
  applyFilters: (filters: Partial<OrderFilters>) => void;
  clearFilters: () => void;
  clearError: () => void;
}

// Create Context
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Order Provider Component
export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // TODO: Replace with actual order data fetching from API

  // Fetch orders
  const fetchOrders = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/orders');
      // const orders = await response.json();
      
      // For now, return empty array
      dispatch({ type: 'SET_ORDERS', payload: [] });
      dispatch({ type: 'SET_STATS', payload: {
        total: 0,
        pending: 0,
        inProgress: 0,
        completed: 0,
        cancelled: 0,
        totalRevenue: 0,
        averageOrderValue: 0
      }});
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch orders' });
    }
  };

  // Fetch single order
  const fetchOrder = async (orderId: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/orders/${orderId}`);
      // const order = await response.json();
      
      // For now, return null
      dispatch({ type: 'SET_CURRENT_ORDER', payload: null });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to fetch order details' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Update order status
  const updateOrderStatus = async (orderId: string, update: Omit<OrderUpdate, 'orderId'>) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/orders/${orderId}`, {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(update)
      // });
      
      // For now, just show error
      dispatch({ type: 'SET_ERROR', payload: 'Order update service not yet implemented.' });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to update order status' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Create new order
  const createOrder = async (orderData: Omit<CustomOrder, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt' | 'tracking'>) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // TODO: Replace with actual API call
      // const response = await fetch('/api/orders', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(orderData)
      // });
      
      // For now, just show error
      dispatch({ type: 'SET_ERROR', payload: 'Order creation service not yet implemented.' });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: 'Failed to create order' });
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Apply filters
  const applyFilters = (filters: Partial<OrderFilters>) => {
    dispatch({ type: 'SET_FILTERS', payload: filters });
  };

  // Clear filters
  const clearFilters = () => {
    dispatch({ type: 'SET_FILTERS', payload: {} });
  };

  // Clear error
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Load orders on mount - commented out until API is ready
  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  const value: OrderContextType = {
    state,
    fetchOrders,
    fetchOrder,
    updateOrderStatus,
    createOrder,
    applyFilters,
    clearFilters,
    clearError,
  };

  return (
    <OrderContext.Provider value={value}>
      {children}
    </OrderContext.Provider>
  );
};

// Custom Hook to use Order Context
export const useOrders = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};
