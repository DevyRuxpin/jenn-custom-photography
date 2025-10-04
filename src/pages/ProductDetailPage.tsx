import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  Share2, 
  Plus, 
  Minus,
  Star,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { storefrontClient, GET_PRODUCT_QUERY } from '../lib/shopify';
import { ShopifyProduct, CartItem } from '../types';
import { useCart } from '../contexts/CartContext';
import { checkoutCart } from '../lib/checkout';
import LoadingSpinner from '../components/LoadingSpinner';

const ProductDetailPage: React.FC = () => {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  useEffect(() => {
    if (handle) {
      fetchProduct(handle);
    }
  }, [handle]);

  const fetchProduct = async (productHandle: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await storefrontClient.request(GET_PRODUCT_QUERY, {
        variables: { handle: productHandle }
      });

      if (response.data?.product) {
        setProduct(response.data.product);
        if (response.data.product.variants.edges[0]) {
          setSelectedVariant(response.data.product.variants.edges[0].node.id);
        }
      } else {
        setError('Product not found');
      }
    } catch (err) {
      console.error('Error fetching product:', err);
      setError('Failed to load product. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    const selectedVariantData = variants.find(v => v.id === selectedVariant);
    if (!selectedVariantData) return;

    const cartItem: CartItem = {
      productId: product.id,
      variantId: selectedVariant,
      quantity,
      title: product.title,
      price: parseFloat(selectedVariantData.price.amount),
      image: product.images.edges[0]?.node.url || '',
    };

    addItem(cartItem);
  };

  const handleBuyNow = async () => {
    if (!product || !selectedVariant) return;

    const selectedVariantData = variants.find(v => v.id === selectedVariant);
    if (!selectedVariantData) return;

    const cartItem: CartItem = {
      productId: product.id,
      variantId: selectedVariant,
      quantity,
      title: product.title,
      price: parseFloat(selectedVariantData.price.amount),
      image: product.images.edges[0]?.node.url || '',
    };

    try {
      await checkoutCart([cartItem]);
    } catch (error) {
      console.error('Buy now failed:', error);
      alert('Checkout failed. Please try again.');
    }
  };

  if (loading) {
    return <LoadingSpinner text="Loading product..." />;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-red-500 text-lg">{error}</div>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const images = product.images.edges.map(edge => edge.node);
  const variants = product.variants.edges.map(edge => edge.node);
  const selectedVariantData = variants.find(v => v.id === selectedVariant);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-sm text-slate-600 mb-8"
        >
          <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-900 font-medium">{product.title}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-lg">
              {images[selectedImageIndex] ? (
                <img
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].altText || product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-slate-500 text-center">
                    <div className="text-6xl mb-4">📸</div>
                    <div className="text-lg">No Image Available</div>
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index
                        ? 'border-primary-500'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.altText || `${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Title and Rating */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-slate-600 ml-2">(4.9) • 127 reviews</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-primary-600">
                ${parseFloat(product.priceRange.minVariantPrice.amount).toFixed(2)}
                <span className="text-lg text-slate-600 ml-2">
                  {product.priceRange.minVariantPrice.currencyCode}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Description</h3>
              <p className="text-slate-600 leading-relaxed">
                {product.description || 'This is a premium photography service that will transform your images with professional quality and attention to detail.'}
              </p>
            </div>

            {/* Variants */}
            {variants.length > 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Options</h3>
                <div className="grid grid-cols-2 gap-3">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant.id)}
                      className={`p-3 rounded-xl border-2 transition-colors text-left ${
                        selectedVariant === variant.id
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="font-medium text-slate-900">{variant.title}</div>
                      <div className="text-sm text-slate-600">
                        ${parseFloat(variant.price.amount).toFixed(2)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-slate-200 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-slate-50 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-3 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-slate-50 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <span className="text-sm text-slate-600">
                  {selectedVariantData?.availableForSale ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">What's Included</h3>
              <div className="space-y-2">
                {[
                  'Professional quality editing',
                  'High-resolution delivery',
                  'Multiple format options',
                  'Quick turnaround time',
                  'Unlimited revisions'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedVariantData?.availableForSale}
                  className="btn-primary flex-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={handleBuyNow}
                  disabled={!selectedVariantData?.availableForSale}
                  className="btn-secondary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Buy Now</span>
                </button>
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Add to Wishlist</span>
                </button>
                
                <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
