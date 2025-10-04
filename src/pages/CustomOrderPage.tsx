import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Palette, 
  Download, 
  Sparkles,
  Upload,
  Send,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';
import PhotoUpload from '../components/PhotoUpload';
import { UploadedFile } from '../components/PhotoUpload';

interface ServiceOption {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedTime: string;
  icon: React.ReactNode;
  features: string[];
}

const CustomOrderPage: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    urgency: 'standard',
    deliveryFormat: 'digital',
    specialInstructions: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services: ServiceOption[] = [
    {
      id: 'restoration',
      name: 'Photo Restoration',
      description: 'Bring old, damaged photos back to life',
      price: 25,
      estimatedTime: '2-5 days',
      icon: <Camera className="h-6 w-6" />,
      features: ['Remove scratches and tears', 'Color correction', 'Digital noise reduction', 'High-resolution output']
    },
    {
      id: 'editing',
      name: 'Photo Editing',
      description: 'Professional editing and enhancement',
      price: 15,
      estimatedTime: '1-3 days',
      icon: <Palette className="h-6 w-6" />,
      features: ['Color grading', 'Background removal', 'Object removal', 'Skin retouching']
    },
    {
      id: 'creative',
      name: 'Creative Design',
      description: 'Transform photos into artistic masterpieces',
      price: 35,
      estimatedTime: '3-7 days',
      icon: <Sparkles className="h-6 w-6" />,
      features: ['Artistic filters', 'Digital painting', 'Composite imagery', 'Custom artwork']
    },
    {
      id: 'printing',
      name: 'Print Services',
      description: 'High-quality printing and framing',
      price: 5,
      estimatedTime: '1-2 days',
      icon: <Download className="h-6 w-6" />,
      features: ['Premium paper options', 'Various sizes', 'Framing services', 'Express delivery']
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically:
      // 1. Upload files to your storage service
      // 2. Create an order in your database
      // 3. Send confirmation emails
      // 4. Integrate with Shopify for payment
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const totalPrice = selectedServiceData ? selectedServiceData.price : 0;

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="glass-card text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h1 className="text-3xl font-bold font-display">Order Submitted!</h1>
            <p className="text-xl text-slate-600">
              Thank you for your custom order request. We'll review your photos and requirements, 
              then send you a detailed quote within 24 hours.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUploadedFiles([]);
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    description: '',
                    urgency: 'standard',
                    deliveryFormat: 'digital',
                    specialInstructions: ''
                  });
                  setSelectedService('');
                }}
                className="btn-primary"
              >
                Submit Another Order
              </button>
              <p className="text-sm text-slate-500">
                We'll contact you at {formData.email} with your quote and next steps.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

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
            Custom <span className="text-primary-600 font-extrabold">Order</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Upload your photos and tell us what you need. We'll provide a detailed quote 
            and timeline for your custom photography services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Photo Upload */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                  <Upload className="h-6 w-6" />
                  <span>Upload Photos</span>
                </h2>
                <PhotoUpload
                  onFilesChange={setUploadedFiles}
                  maxFiles={20}
                  maxFileSize={25}
                />
              </div>

              {/* Service Selection */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-6">Select Service</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service.id)}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedService === service.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`p-2 rounded-lg ${
                          selectedService === service.id
                            ? 'bg-primary-500 text-white'
                            : 'bg-slate-100 text-slate-600'
                        }`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">
                            {service.name}
                          </h3>
                          <p className="text-sm text-slate-600 mb-2">
                            {service.description}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-primary-600 font-medium">
                              ${service.price}
                            </span>
                            <span className="text-slate-500 flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{service.estimatedTime}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Urgency
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="standard">Standard (3-5 days)</option>
                      <option value="rush">Rush (1-2 days) +$10</option>
                      <option value="express">Express (24 hours) +$25</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="glass-card">
                <h2 className="text-2xl font-bold mb-6">Project Details</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Describe what you need done with your photos..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Delivery Format
                    </label>
                    <select
                      name="deliveryFormat"
                      value={formData.deliveryFormat}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="digital">Digital Files Only</option>
                      <option value="print">Print + Digital</option>
                      <option value="both">Both Options</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Special Instructions
                    </label>
                    <textarea
                      name="specialInstructions"
                      value={formData.specialInstructions}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                      placeholder="Any specific requirements or preferences..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="glass-card">
                <button
                  type="submit"
                  disabled={isSubmitting || !selectedService || uploadedFiles.length === 0}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting Order...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Submit Custom Order</span>
                    </>
                  )}
                </button>
                
                {(!selectedService || uploadedFiles.length === 0) && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center space-x-2 text-yellow-800">
                      <AlertCircle className="h-4 w-4" />
                      <span className="text-sm">
                        Please select a service and upload at least one photo to continue.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Service Summary */}
            {selectedServiceData && (
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4">Service Summary</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary-500 rounded-lg text-white">
                      {selectedServiceData.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {selectedServiceData.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {selectedServiceData.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-slate-900">What's Included:</h5>
                    <ul className="space-y-1">
                      {selectedServiceData.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Pricing */}
            <div className="glass-card">
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <DollarSign className="h-5 w-5" />
                <span>Pricing</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Base Service</span>
                  <span className="font-medium">${totalPrice}</span>
                </div>
                {formData.urgency === 'rush' && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rush Fee</span>
                    <span className="font-medium">+$10</span>
                  </div>
                )}
                {formData.urgency === 'express' && (
                  <div className="flex justify-between">
                    <span className="text-slate-600">Express Fee</span>
                    <span className="font-medium">+$25</span>
                  </div>
                )}
                <div className="border-t border-slate-200 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary-600 font-bold">
                      ${totalPrice + (formData.urgency === 'rush' ? 10 : formData.urgency === 'express' ? 25 : 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Summary */}
            {uploadedFiles.length > 0 && (
              <div className="glass-card">
                <h3 className="text-xl font-bold mb-4">Upload Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Photos Uploaded</span>
                    <span className="font-medium">{uploadedFiles.length}</span>
                  </div>
                  <div className="text-sm text-slate-500">
                    Total size: {(uploadedFiles.reduce((acc, file) => acc + file.file.size, 0) / 1024 / 1024).toFixed(2)} MB
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomOrderPage;
