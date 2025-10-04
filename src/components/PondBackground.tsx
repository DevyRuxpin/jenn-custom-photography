import React, { useState, useEffect } from 'react';

const PondBackground: React.FC = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  // Your pond pictures - using public folder paths
  const pondImages = [
    '/pond-backgrounds/IMG_0392.jpeg',
    '/pond-backgrounds/IMG_0964.jpeg', 
    '/pond-backgrounds/IMG_1050.jpeg',
    '/pond-backgrounds/IMG_1071.jpeg',
    '/pond-backgrounds/IMG_9657.jpeg',
    '/pond-backgrounds/IMG_9707.jpeg',
    '/pond-backgrounds/IMG_1073.jpeg',
    '/pond-backgrounds/IMG_9655.jpeg',
    '/pond-backgrounds/IMG_9660.jpeg',
    '/pond-backgrounds/IMG_9721.jpeg'
  ];

  // Cycle through backgrounds every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % pondImages.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  // Update the body background image
  useEffect(() => {
    const body = document.body;
    body.style.backgroundImage = `url(${pondImages[currentBg]})`;
    console.log('Switched to pond background:', pondImages[currentBg]);
  }, [currentBg, pondImages]);

  return null; // This component doesn't render anything, just manages the background
};

export default PondBackground;
