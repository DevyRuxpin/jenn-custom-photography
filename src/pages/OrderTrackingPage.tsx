import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Package, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Download,
  Eye,
  ArrowLeft,
  Calendar,
  User,
  Mail,
  Phone,
  DollarSign,
  FileImage,
  RefreshCw,
  Truck
} from 'lucide-react';
import { useOrders } from '../contexts/OrderContext';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const OrderTrackingPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const { state, fetchOrder, updateOrderStatus } = useOrders();
  const { state: authState } = useAuth();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (orderId) {
      fetchOrder(orderId);
    }
  }, [orderId, fetchOrder]);

  const handleRefresh = async () => {
    if (!orderId) return;
    setIsRefreshing(true);
    await fetchOrder(orderId);
    setIsRefreshing(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'confirmed':
        return 'text-blue-600 bg-blue-100';
      case 'in-progress':
        return 'text-purple-600 bg-purple-100';
      case 'review':
        return 'text-orange-600 bg-orange-100';
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'delivered':
        return 'text-emerald-600 bg-emerald-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5" />;
      case 'in-progress':
        return <RefreshCw className="h-5 w-5" />;
      case 'review':
        return <Eye className="h-5 w-5" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'delivered':
        return <Truck className="h-5 w-5" />;
      case 'cancelled':
        return <AlertCircle className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getProgressSteps = () => {
    const steps = [
      { id: 'pending', label: 'Order Received', icon: <Package className="h-5 w-5" /> },
      { id: 'confirmed', label: 'Confirmed', icon: <CheckCircle className="h-5 w-5" /> },
      { id: 'in-progress', label: 'In Progress', icon: <RefreshCw className="h-5 w-5" /> },
      { id: 'review', label: 'Quality Review', icon: <Eye className="h-5 w-5" /> },
      { id: 'completed', label: 'Completed', icon: <CheckCircle className="h-5 w-5" /> },
      { id: 'delivered', label: 'Delivered', icon: <Truck className="h-5 w-5" /> },
    ];

    const currentIndex = steps.findIndex(step => step.id === state.currentOrder?.status);
    
    return steps.map((step, index) => ({
      ...step,
      completed: index <= currentIndex,
      current: index === currentIndex,
    }));
  };

  if (state.isLoading && !state.currentOrder) {
    return <LoadingSpinner text="Loading order details..." />;
  }

  if (!state.currentOrder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="h-16 w-16 text-slate-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Order Not Found</h1>
          <p className="text-slate-600 mb-4">The order you're looking for doesn't exist.</p>
          <Link to="/account" className="btn-primary">
            Back to Account
          </Link>
        </div>
      </div>
    );
  }

  const order = state.currentOrder;
  const progressSteps = getProgressSteps();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link
            to="/account"
            className="inline-flex items-center text-primary-600 hover:text-primary-800 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Account
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold font-display text-slate-900">
                Order Tracking
              </h1>
              <p className="text-xl text-slate-600 mt-2">
                {order.orderNumber} • {order.serviceType.charAt(0).toUpperCase() + order.serviceType.slice(1)} Service
              </p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="btn-secondary flex items-center space-x-2"
              >
                <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Order Status */}
            <div className="glass-card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Order Status</h2>
                <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  <span className="font-medium capitalize">{order.status.replace('-', ' ')}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-600">Progress</span>
                  <span className="text-sm font-medium text-slate-900">{order.tracking.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${order.tracking.progress}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gradient-to-r from-primary-500 to-accent-500 h-3 rounded-full"
                  />
                </div>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {progressSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      step.completed
                        ? 'border-primary-500 bg-primary-50'
                        : step.current
                        ? 'border-primary-300 bg-primary-25'
                        : 'border-slate-200 bg-slate-50'
                    }`}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full mb-3 mx-auto ${
                      step.completed
                        ? 'bg-primary-500 text-white'
                        : step.current
                        ? 'bg-primary-200 text-primary-700'
                        : 'bg-slate-200 text-slate-500'
                    }`}>
                      {step.icon}
                    </div>
                    <p className={`text-sm font-medium text-center ${
                      step.completed || step.current ? 'text-slate-900' : 'text-slate-500'
                    }`}>
                      {step.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status History */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">Status History</h2>
              <div className="space-y-4">
                {order.tracking.statusHistory.map((status, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl"
                  >
                    <div className={`p-2 rounded-full ${getStatusColor(status.status)}`}>
                      {getStatusIcon(status.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-slate-900 capitalize">
                          {status.status.replace('-', ' ')}
                        </h3>
                        <span className="text-sm text-slate-500">
                          {status.timestamp.toLocaleDateString()} at {status.timestamp.toLocaleTimeString()}
                        </span>
                      </div>
                      <p className="text-slate-600 mt-1">{status.message}</p>
                      <p className="text-xs text-slate-400 mt-1">
                        Updated by {status.updatedBy}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="glass-card">
              <h2 className="text-2xl font-bold mb-6">Order Items</h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 bg-slate-50 rounded-xl">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-600">{item.service}</p>
                      <p className="text-sm text-slate-500">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-slate-900">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Order Summary */}
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Order Number</span>
                  <span className="font-medium">{order.orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Service Type</span>
                  <span className="font-medium capitalize">{order.serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Urgency</span>
                  <span className="font-medium capitalize">{order.urgency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Order Date</span>
                  <span className="font-medium">{order.createdAt.toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Estimated Completion</span>
                  <span className="font-medium">
                    {order.tracking.estimatedCompletion?.toLocaleDateString() || 'TBD'}
                  </span>
                </div>
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary-600 font-bold">${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">Customer Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{order.customerName}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{order.customerEmail}</span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Description</h4>
                  <p className="text-sm text-slate-600">{order.description}</p>
                </div>
                {order.specialInstructions && (
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Special Instructions</h4>
                    <p className="text-sm text-slate-600">{order.specialInstructions}</p>
                  </div>
                )}
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Delivery Format</h4>
                  <p className="text-sm text-slate-600 capitalize">{order.deliveryFormat}</p>
                </div>
              </div>
            </div>

            {/* Uploaded Photos */}
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <FileImage className="h-5 w-5" />
                <span>Uploaded Photos</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {order.photos.map((photo) => (
                  <div key={photo.id} className="group cursor-pointer">
                    <img
                      src={photo.url}
                      alt={photo.name}
                      className="w-full h-20 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <p className="text-xs text-slate-600 mt-1 truncate">{photo.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            {order.deliverables && order.deliverables.length > 0 && (
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Deliverables</span>
                </h3>
                <div className="space-y-3">
                  {order.deliverables.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <p className="font-medium text-slate-900">{file.name}</p>
                        <p className="text-sm text-slate-500">
                          Delivered {file.deliveredAt.toLocaleDateString()}
                        </p>
                      </div>
                      <button className="btn-primary">
                        <Download className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingPage;
