import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  X,
  Heart,
  Share2,
  Download,
  Eye,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { getAllPhotos, PhotoData } from '../lib/photoLoader';

const PortfolioPage: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<PhotoData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    filterPhotos();
  }, [photos, selectedCategory, searchTerm]);

  const loadPhotos = async () => {
    setIsLoading(true);
    try {
      const photoData = await getAllPhotos();
      const uniqueCategories = ['All', ...Array.from(new Set(photoData.map(p => p.category).filter(Boolean) as string[]))];
      
      setPhotos(photoData);
      setCategories(uniqueCategories);
      setFilteredPhotos(photoData);
    } catch (error) {
      console.error('Error loading photos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filterPhotos = () => {
    let filtered = [...photos];

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(photo => photo.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(photo =>
        photo.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        photo.category?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPhotos(filtered);
    setCurrentPage(1);
  };

  const openLightbox = (photo: PhotoData) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(photo => photo.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="text-slate-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display">
            <span className="text-primary-600 font-extrabold">Jenn's Photography Portfolio</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our collection of professional photography sessions, restoration work, and creative projects, showcasing 
            our expertise in various styles and techniques.
          </p>
        </motion.div>

        {/* Filters and Controls */}
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
                placeholder="Search portfolio..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Mode */}
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
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <p className="text-slate-600">
            Showing {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'space-y-6'
          }
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`glass-card group hover:shadow-glow transition-all duration-300 cursor-pointer ${
                  viewMode === 'list' ? 'flex flex-row space-x-6' : ''
                }`}
                onClick={() => openLightbox(photo)}
              >
                {/* Photo */}
                <div className={`relative overflow-hidden rounded-xl ${
                  viewMode === 'list' ? 'w-48 h-32 flex-shrink-0' : 'aspect-square'
                }`}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Eye className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Heart className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Share2 className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className={`${viewMode === 'list' ? 'flex-1' : 'mt-4'} space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                      {photo.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                    {photo.title}
                  </h3>
                  {viewMode === 'list' && (
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {photo.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredPhotos.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              No photos found
            </h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors z-10"
              >
                <X className="h-6 w-6 text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors z-10"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors z-10"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>

              {/* Image */}
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedPhoto.title}</h3>
                    <p className="text-sm opacity-80">{selectedPhoto.category}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                {selectedPhoto.description && (
                  <p className="text-white text-sm mt-2 opacity-90">
                    {selectedPhoto.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
