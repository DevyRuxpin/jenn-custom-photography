import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  Star,
  ShoppingBag,
  Heart,
  Eye
} from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { getFeaturedPhotos } from '../lib/photoLoader';
import SEO from '../components/SEO';

interface PhotographyProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  alt: string;
  featured: boolean;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<PhotographyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { addItem } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get featured photos and create photography products
      const photos = getFeaturedPhotos();
      
      const photographyProducts: PhotographyProduct[] = photos.map((photo, index) => ({
        id: `photo-${photo.id}`,
        title: `${photo.category} Photography Session`,
        description: photo.description || `Professional ${photo.category.toLowerCase()} photography session with high-quality results.`,
        price: photo.category === 'Portrait' ? 150 : photo.category === 'Creative' ? 200 : 175,
        category: photo.category,
        image: photo.src,
        alt: photo.alt,
        featured: index < 4
      }));

      // Add some additional photography services
      const additionalProducts: PhotographyProduct[] = [
        {
          id: 'photo-restoration',
          title: 'Photo Restoration Service',
          description: 'Professional photo restoration for damaged, faded, or torn photographs. Bring your memories back to life.',
          price: 75,
          category: 'Restoration',
          image: photos[0]?.src || '',
          alt: 'Photo restoration service',
          featured: true
        },
        {
          id: 'photo-editing',
          title: 'Creative Photo Editing',
          description: 'Professional photo editing and retouching services. Transform your images with artistic flair.',
          price: 50,
          category: 'Editing',
          image: photos[1]?.src || '',
          alt: 'Creative photo editing',
          featured: true
        },
        {
          id: 'custom-prints',
          title: 'Custom Photo Prints',
          description: 'High-quality custom photo prints on premium materials. Various sizes and finishes available.',
          price: 25,
          category: 'Prints',
          image: photos[2]?.src || '',
          alt: 'Custom photo prints',
          featured: true
        },
        {
          id: 'digital-album',
          title: 'Digital Photo Album',
          description: 'Beautifully designed digital photo album with your favorite memories. Perfect for sharing.',
          price: 100,
          category: 'Albums',
          image: photos[3]?.src || '',
          alt: 'Digital photo album',
          featured: true
        }
      ];

      setProducts([...photographyProducts, ...additionalProducts]);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return a.price - b.price;
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const handleAddToCart = (product: PhotographyProduct) => {
    const cartItem = {
      productId: product.id,
      variantId: product.id,
      quantity: 1,
      title: product.title,
      price: product.price,
      image: product.image,
    };

    addItem(cartItem);
  };

  if (loading) {
    return <LoadingSpinner text="Loading products..." />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-red-500 text-lg">{error}</div>
          <button
            onClick={fetchProducts}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Photography Products & Services - Jenn Custom Photography"
        description="Explore our premium photography services including portrait sessions, photo restoration, creative editing, and custom prints. Professional photography products for all your needs."
        keywords="photography products, portrait photography, photo restoration, creative editing, custom prints, photography services"
        url="/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            Jenn's <span className="text-primary-600 font-extrabold">Photography Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our collection of premium photography services and products, 
            designed to bring your vision to life with professional quality.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.slice(1).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'price' | 'category')}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="name">Sort by Name</option>
                <option value="price">Sort by Price</option>
                <option value="category">Sort by Category</option>
              </select>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Grid3X3 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
              : 'space-y-6'
          }
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card group hover:shadow-glow transition-all duration-300 ${
                viewMode === 'list' ? 'flex flex-row space-x-6' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`relative overflow-hidden rounded-xl ${
                viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-square'
              }`}>
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.alt || product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                    <div className="text-slate-500 text-center">
                      <div className="text-4xl mb-2">📸</div>
                      <div className="text-sm">No Image</div>
                    </div>
                  </div>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Eye className="h-5 w-5 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                    <Heart className="h-5 w-5 text-white" />
                  </button>
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors"
                  >
                    <ShoppingBag className="h-5 w-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className={`${viewMode === 'list' ? 'flex-1' : 'mt-4'} space-y-3`}>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary-600">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="text-sm text-slate-500">
                      {product.category}
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-slate-600 ml-1">(5.0)</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn-primary flex-1 text-center"
                  >
                    Add to Cart
                  </button>
                  <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                    <Heart className="h-5 w-5 text-slate-600" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No Products Found */}
        {sortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              No products found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="btn-primary"
            >
              Clear Search
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
