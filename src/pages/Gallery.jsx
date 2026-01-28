import { useState } from 'react';
import './Gallery.css';

// Import gallery images
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import gallery3 from '../assets/gallery3.png';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';
import gallery6 from '../assets/gallery6.png';
import gallery7 from '../assets/gallery7.png';
import gallery8 from '../assets/gallery8.png';
import gallery9 from '../assets/gallery9.png';
import gallery10 from '../assets/gallery10.png';
import gallery11 from '../assets/gallery11.png';

// Import product images
import circulationPump from '../assets/products/circulation-pump.png';
import sandFilter from '../assets/products/sand-filter.png';
import tccaGranules from '../assets/products/tcca-granules.png';
import copperSulphate from '../assets/products/copper-sulphate.png';
import algaeRemoval from '../assets/products/algae-removal.png';
import ladder from '../assets/products/ladder.png';
import underwaterLed from '../assets/products/underwater-led.png';
import underwaterLed2 from '../assets/products/underwater-led2.png';
import underwaterStriplight from '../assets/products/underwater-striplight.png';
import underwaterStriplight2 from '../assets/products/underwater-striplight2.png';
import allTiles from '../assets/products/all-tiles.png';
import drain from '../assets/products/drain.png';
import holdingBar from '../assets/products/holding-bar.png';
import quartzSand from '../assets/products/quartz-sand-media.png';
import pvcEquipment from '../assets/products/pvc-equipment.png';
import pvcPipe from '../assets/products/pvc-pipe.png';
import vaccumHead from '../assets/products/vaccum-head.png';
import waterTestKit from '../assets/products/water-test-kit.png';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'pool', label: 'Pool Projects' },
    { id: 'products', label: 'Products' },
  ];

  const galleryItems = [
    // Pool Projects
    { id: 1, src: gallery1, title: 'Pool Installation', category: 'pool' },
    { id: 2, src: gallery2, title: 'Pool Project', category: 'pool' },
    { id: 3, src: gallery3, title: 'Pool Construction', category: 'pool' },
    { id: 4, src: gallery4, title: 'Pool Design', category: 'pool' },
    { id: 5, src: gallery5, title: 'Pool Setup', category: 'pool' },
    { id: 6, src: gallery6, title: 'Pool Equipment', category: 'pool' },
    { id: 7, src: gallery7, title: 'Pool Work', category: 'pool' },
    { id: 8, src: gallery8, title: 'Pool Installation', category: 'pool' },
    { id: 9, src: gallery9, title: 'Pool Project', category: 'pool' },
    { id: 10, src: gallery10, title: 'Pool Setup', category: 'pool' },
    { id: 11, src: gallery11, title: 'Pool Design', category: 'pool' },

    // Products
    { id: 12, src: circulationPump, title: 'Circulation Pump', category: 'products' },
    { id: 13, src: sandFilter, title: 'Sand Filter', category: 'products' },
    { id: 14, src: tccaGranules, title: 'TCCA-90 Granules', category: 'products' },
    { id: 15, src: copperSulphate, title: 'Copper Sulphate', category: 'products' },
    { id: 16, src: algaeRemoval, title: 'Algae Removal', category: 'products' },
    { id: 17, src: ladder, title: 'Overflow Ladder', category: 'products' },
    { id: 18, src: underwaterLed, title: 'Underwater LED', category: 'products' },
    { id: 19, src: underwaterLed2, title: 'Underwater LED Light', category: 'products' },
    { id: 20, src: underwaterStriplight, title: 'Underwater Strip Light', category: 'products' },
    { id: 21, src: underwaterStriplight2, title: 'LED Strip Light', category: 'products' },
    { id: 22, src: allTiles, title: 'Pool Tiles', category: 'products' },
    { id: 23, src: drain, title: 'Main Drain', category: 'products' },
    { id: 24, src: holdingBar, title: 'Holding Bars', category: 'products' },
    { id: 25, src: quartzSand, title: 'Quartz Sand Media', category: 'products' },
    { id: 26, src: pvcEquipment, title: 'PVC Equipment', category: 'products' },
    { id: 27, src: pvcPipe, title: 'PVC Pipe', category: 'products' },
    { id: 28, src: vaccumHead, title: 'Vacuum Head', category: 'products' },
    { id: 29, src: waterTestKit, title: 'Water Test Kit', category: 'products' },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <div className="gallery-hero__background"></div>
        <div className="container">
          <div className="gallery-hero__content">
            <h1 className="gallery-hero__title">Gallery</h1>
            <p className="gallery-hero__description">
              Explore our pool projects and product range.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section section">
        <div className="container">
          {/* Category Filter */}
          <div className="gallery-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`gallery-filter__btn ${activeCategory === category.id ? 'gallery-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => openModal(item)}
              >
                <div className="gallery-item__image">
                  <img src={item.src} alt={item.title} loading="lazy" />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__title">{item.title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="gallery-modal__content" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal__close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            
            <button 
              className="gallery-modal__nav gallery-modal__nav--prev"
              onClick={() => navigateImage('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            
            <img src={selectedImage.src} alt={selectedImage.title} />
            
            <button 
              className="gallery-modal__nav gallery-modal__nav--next"
              onClick={() => navigateImage('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
            
            <div className="gallery-modal__info">
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
