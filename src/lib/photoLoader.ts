// Modern photo loading system for 2025
export interface PhotoData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
  description?: string;
}

// Modern 2025 approach: Import actual photos from assets
// Import all your actual photos
import IMG_0392 from '../assets/photos/IMG_0392.jpeg';
import IMG_0964 from '../assets/photos/IMG_0964.jpeg';
import IMG_1050 from '../assets/photos/IMG_1050.jpeg';
import IMG_1051 from '../assets/photos/IMG_1051.jpeg';
import IMG_1068 from '../assets/photos/IMG_1068.jpeg';
import IMG_1071 from '../assets/photos/IMG_1071.jpeg';
import IMG_1073 from '../assets/photos/IMG_1073.jpeg';
import IMG_1074 from '../assets/photos/IMG_1074.jpeg';
import IMG_1075 from '../assets/photos/IMG_1075.jpeg';
import IMG_1078 from '../assets/photos/IMG_1078.jpeg';
import IMG_1079 from '../assets/photos/IMG_1079.jpeg';
import IMG_1171 from '../assets/photos/IMG_1171.jpeg';
import IMG_9655 from '../assets/photos/IMG_9655.jpeg';
import IMG_9657 from '../assets/photos/IMG_9657.jpeg';
import IMG_9660 from '../assets/photos/IMG_9660.jpeg';
import IMG_9664 from '../assets/photos/IMG_9664.jpeg';
import IMG_9671 from '../assets/photos/IMG_9671.jpeg';
import IMG_9676 from '../assets/photos/IMG_9676.jpeg';
import IMG_9707 from '../assets/photos/IMG_9707.jpeg';
import IMG_9709 from '../assets/photos/IMG_9709.jpeg';
import IMG_9721 from '../assets/photos/IMG_9721.jpeg';
import IMG_9724 from '../assets/photos/IMG_9724.jpeg';

// Create photo data using your actual images
const loadPhotos = async (): Promise<PhotoData[]> => {
  try {
    // Your actual photos with proper categorization
    const actualPhotos: PhotoData[] = [
      {
        id: 'img-0392',
        src: IMG_0392,
        alt: 'Professional photography - IMG_0392',
        title: 'IMG_0392',
        category: 'Portrait',
        description: 'Professional portrait photography showcasing expert technique'
      },
      {
        id: 'img-0964',
        src: IMG_0964,
        alt: 'Professional photography - IMG_0964',
        title: 'IMG_0964',
        category: 'Creative',
        description: 'Creative photography with artistic composition'
      },
      {
        id: 'img-1050',
        src: IMG_1050,
        alt: 'Professional photography - IMG_1050',
        title: 'IMG_1050',
        category: 'Portrait',
        description: 'Professional portrait with natural lighting'
      },
      {
        id: 'img-1051',
        src: IMG_1051,
        alt: 'Professional photography - IMG_1051',
        title: 'IMG_1051',
        category: 'Portrait',
        description: 'Professional portrait photography'
      },
      {
        id: 'img-1068',
        src: IMG_1068,
        alt: 'Professional photography - IMG_1068',
        title: 'IMG_1068',
        category: 'Creative',
        description: 'Creative photography with unique perspective'
      },
      {
        id: 'img-1071',
        src: IMG_1071,
        alt: 'Professional photography - IMG_1071',
        title: 'IMG_1071',
        category: 'Portrait',
        description: 'Professional portrait with excellent composition'
      },
      {
        id: 'img-1073',
        src: IMG_1073,
        alt: 'Professional photography - IMG_1073',
        title: 'IMG_1073',
        category: 'Creative',
        description: 'Creative photography showcasing artistic vision'
      },
      {
        id: 'img-1074',
        src: IMG_1074,
        alt: 'Professional photography - IMG_1074',
        title: 'IMG_1074',
        category: 'Portrait',
        description: 'Professional portrait with natural expression'
      },
      {
        id: 'img-1075',
        src: IMG_1075,
        alt: 'Professional photography - IMG_1075',
        title: 'IMG_1075',
        category: 'Creative',
        description: 'Creative photography with artistic flair'
      },
      {
        id: 'img-1078',
        src: IMG_1078,
        alt: 'Professional photography - IMG_1078',
        title: 'IMG_1078',
        category: 'Portrait',
        description: 'Professional portrait photography'
      },
      {
        id: 'img-1079',
        src: IMG_1079,
        alt: 'Professional photography - IMG_1079',
        title: 'IMG_1079',
        category: 'Creative',
        description: 'Creative photography with unique composition'
      },
      {
        id: 'img-1171',
        src: IMG_1171,
        alt: 'Professional photography - IMG_1171',
        title: 'IMG_1171',
        category: 'Portrait',
        description: 'Professional portrait with excellent lighting'
      },
      {
        id: 'img-9655',
        src: IMG_9655,
        alt: 'Professional photography - IMG_9655',
        title: 'IMG_9655',
        category: 'Creative',
        description: 'Creative photography showcasing artistic vision'
      },
      {
        id: 'img-9657',
        src: IMG_9657,
        alt: 'Professional photography - IMG_9657',
        title: 'IMG_9657',
        category: 'Portrait',
        description: 'Professional portrait with natural beauty'
      },
      {
        id: 'img-9660',
        src: IMG_9660,
        alt: 'Professional photography - IMG_9660',
        title: 'IMG_9660',
        category: 'Creative',
        description: 'Creative photography with artistic composition'
      },
      {
        id: 'img-9664',
        src: IMG_9664,
        alt: 'Professional photography - IMG_9664',
        title: 'IMG_9664',
        category: 'Portrait',
        description: 'Professional portrait photography'
      },
      {
        id: 'img-9671',
        src: IMG_9671,
        alt: 'Professional photography - IMG_9671',
        title: 'IMG_9671',
        category: 'Creative',
        description: 'Creative photography with unique perspective'
      },
      {
        id: 'img-9676',
        src: IMG_9676,
        alt: 'Professional photography - IMG_9676',
        title: 'IMG_9676',
        category: 'Portrait',
        description: 'Professional portrait with excellent technique'
      },
      {
        id: 'img-9707',
        src: IMG_9707,
        alt: 'Professional photography - IMG_9707',
        title: 'IMG_9707',
        category: 'Creative',
        description: 'Creative photography showcasing artistic flair'
      },
      {
        id: 'img-9709',
        src: IMG_9709,
        alt: 'Professional photography - IMG_9709',
        title: 'IMG_9709',
        category: 'Portrait',
        description: 'Professional portrait with natural lighting'
      },
      {
        id: 'img-9721',
        src: IMG_9721,
        alt: 'Professional photography - IMG_9721',
        title: 'IMG_9721',
        category: 'Creative',
        description: 'Creative photography with artistic composition'
      },
      {
        id: 'img-9724',
        src: IMG_9724,
        alt: 'Professional photography - IMG_9724',
        title: 'IMG_9724',
        category: 'Portrait',
        description: 'Professional portrait photography'
      }
    ];

    return actualPhotos;
  } catch (error) {
    console.error('Error loading photos:', error);
    return [];
  }
};

// Cache the loaded photos
let cachedPhotos: PhotoData[] | null = null;

// Modern async/await pattern with caching
export const getAllPhotos = async (): Promise<PhotoData[]> => {
  if (cachedPhotos) {
    return cachedPhotos;
  }
  
  cachedPhotos = await loadPhotos();
  return cachedPhotos;
};

// Synchronous version for components that need immediate access
export const getFeaturedPhotos = (): PhotoData[] => {
  // Return a subset of your actual photos for featured display
  return [
    {
      id: 'img-0392',
      src: IMG_0392,
      alt: 'Professional photography - IMG_0392',
      title: 'IMG_0392',
      category: 'Portrait',
      description: 'Professional portrait photography showcasing expert technique'
    },
    {
      id: 'img-1071',
      src: IMG_1071,
      alt: 'Professional photography - IMG_1071',
      title: 'IMG_1071',
      category: 'Portrait',
      description: 'Professional portrait with excellent composition'
    },
    {
      id: 'img-9657',
      src: IMG_9657,
      alt: 'Professional photography - IMG_9657',
      title: 'IMG_9657',
      category: 'Portrait',
      description: 'Professional portrait with natural beauty'
    },
    {
      id: 'img-0964',
      src: IMG_0964,
      alt: 'Professional photography - IMG_0964',
      title: 'IMG_0964',
      category: 'Creative',
      description: 'Creative photography with artistic composition'
    },
    {
      id: 'img-1073',
      src: IMG_1073,
      alt: 'Professional photography - IMG_1073',
      title: 'IMG_1073',
      category: 'Creative',
      description: 'Creative photography showcasing artistic vision'
    },
    {
      id: 'img-9721',
      src: IMG_9721,
      alt: 'Professional photography - IMG_9721',
      title: 'IMG_9721',
      category: 'Creative',
      description: 'Creative photography with artistic composition'
    },
    {
      id: 'img-1050',
      src: IMG_1050,
      alt: 'Professional photography - IMG_1050',
      title: 'IMG_1050',
      category: 'Portrait',
      description: 'Professional portrait with natural lighting'
    },
    {
      id: 'img-9707',
      src: IMG_9707,
      alt: 'Professional photography - IMG_9707',
      title: 'IMG_9707',
      category: 'Creative',
      description: 'Creative photography showcasing artistic flair'
    }
  ];
};

// Modern hook for React components
export const usePhotos = () => {
  const [photos, setPhotos] = React.useState<PhotoData[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadPhotosData = async () => {
      try {
        setLoading(true);
        const photosData = await getAllPhotos();
        setPhotos(photosData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load photos');
      } finally {
        setLoading(false);
      }
    };

    loadPhotosData();
  }, []);

  return { photos, loading, error, refetch: () => getAllPhotos() };
};

// Add React import at the top
import React from 'react';