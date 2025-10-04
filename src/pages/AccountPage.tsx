import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Settings,
  ShoppingBag,
  Heart,
  Download,
  Clock,
  CheckCircle
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useOrders } from '../contexts/OrderContext';

const AccountPage: React.FC = () => {
  const { state, updateProfile, logout } = useAuth();
  const { state: orderState, fetchOrders } = useOrders();
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    firstName: state.user?.firstName || '',
    lastName: state.user?.lastName || '',
    phone: state.user?.phone || '',
  });

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  if (!state.user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Please log in</h1>
          <p className="text-slate-600">You need to be logged in to view your account.</p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    await updateProfile(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({
      firstName: state.user?.firstName || '',
      lastName: state.user?.lastName || '',
      phone: state.user?.phone || '',
    });
    setIsEditing(false);
  };

  // Use real order data from context
  const orders = orderState.orders.slice(0, 5); // Show latest 5 orders

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'in-progress':
        return <Clock className="h-4 w-4" />;
      case 'pending':
        return <Clock className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            My <span className="text-primary-600 font-extrabold">Account</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Manage your profile, track orders, and view your photography history.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="glass-card">
              <div className="text-center space-y-4">
                {/* Avatar */}
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {state.user.firstName[0]}{state.user.lastName[0]}
                  </div>
                  <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                    <Camera className="h-4 w-4 text-slate-600" />
                  </button>
                </div>

                {/* User Info */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {state.user.firstName} {state.user.lastName}
                  </h3>
                  <p className="text-slate-600">{state.user.email}</p>
                </div>

                {/* Edit Button */}
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-secondary flex items-center space-x-2"
                >
                  <Edit3 className="h-4 w-4" />
                  <span>{isEditing ? 'Cancel' : 'Edit Profile'}</span>
                </button>
              </div>

              {/* Profile Details */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{state.user.email}</span>
                </div>
                {state.user.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-slate-400" />
                    <span className="text-slate-600">{state.user.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">
                    Member since {new Date(state.user.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="w-full mt-6 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Edit Profile Form */}
            {isEditing && (
              <div className="glass-card">
                <h2 className="text-xl font-bold mb-6">Edit Profile</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={editData.firstName}
                        onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={editData.lastName}
                        onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={editData.phone}
                      onChange={(e) => setEditData({ ...editData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleSave}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Save className="h-4 w-4" />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="btn-secondary flex items-center space-x-2"
                    >
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card text-center">
                <div className="p-3 bg-primary-100 rounded-lg w-fit mx-auto mb-3">
                  <ShoppingBag className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{orderState.stats?.total || 0}</div>
                <div className="text-slate-600">Total Orders</div>
              </div>
              <div className="glass-card text-center">
                <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">{orderState.stats?.completed || 0}</div>
                <div className="text-slate-600">Completed</div>
              </div>
              <div className="glass-card text-center">
                <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  {orderState.orders.reduce((sum, order) => sum + order.photos.length, 0)}
                </div>
                <div className="text-slate-600">Photos Processed</div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="glass-card">
              <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
              <div className="space-y-4">
                {orders.length === 0 ? (
                  <div className="text-center py-8">
                    <ShoppingBag className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600">No orders yet</p>
                    <Link to="/custom-order" className="btn-primary mt-4 inline-block">
                      Create Your First Order
                    </Link>
                  </div>
                ) : (
                  orders.map((order) => (
                    <Link
                      key={order.id}
                      to={`/orders/${order.id}`}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-lg ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{order.orderNumber}</div>
                          <div className="text-sm text-slate-600 capitalize">{order.serviceType}</div>
                          <div className="text-xs text-slate-500">{order.createdAt.toLocaleDateString()}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-slate-900">${order.total.toFixed(2)}</div>
                        <div className={`text-sm capitalize ${getStatusColor(order.status)}`}>
                          {order.status.replace('-', ' ')}
                        </div>
                      </div>
                    </Link>
                  ))
                )}
              </div>
              <button className="w-full mt-4 btn-secondary">
                View All Orders
              </button>
            </div>

            {/* Account Settings */}
            <div className="glass-card">
              <h2 className="text-xl font-bold mb-6 flex items-center space-x-2">
                <Settings className="h-5 w-5" />
                <span>Account Settings</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-900">Email Notifications</div>
                    <div className="text-sm text-slate-600">Receive updates about your orders</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-900">SMS Notifications</div>
                    <div className="text-sm text-slate-600">Get text updates for urgent orders</div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
