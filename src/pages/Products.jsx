import { useState } from 'react';
import Button from '../components/Button';

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
import allTiles from '../assets/products/all-tiles.png';
import drain from '../assets/products/drain.png';
import holdingBar from '../assets/products/holding-bar.png';
import quartzSand from '../assets/products/quartz-sand-media.png';
import pvcEquipment from '../assets/products/pvc-equipment.png';
import vacuumHead from '../assets/products/vaccum-head.png';
import waterTestKit from '../assets/products/water-test-kit.png';

import './Products.css';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'pumps', label: 'Circulation Pumps' },
    { id: 'filters', label: 'Sand Filters' },
    { id: 'chemicals', label: 'Disinfectant Chemicals' },
    { id: 'ladders', label: 'Overflow Ladders' },
    { id: 'lights', label: 'Underwater Lights' },
    { id: 'tiles', label: 'Pool Tiles' },
    { id: 'accessories', label: 'Accessories' },
  ];

const products = [
  // ===== CIRCULATION PUMPS =====
  {
    id: 1,
    name: 'Swimming Pool Circulation Pumps',
    category: 'pumps',
    description:
      'High-efficiency centrifugal swimming pool circulation pumps suitable for residential, commercial, and industrial pools. Available in multiple power ratings including 0.5 HP, 1 HP, 1.5 HP, 2 HP, and higher capacities. Offered in different voltage configurations (single-phase and three-phase), frequencies (50 Hz / 60 Hz), and flow rates to match specific pool requirements. Pumps feature corrosion-resistant construction, low-noise operation, and continuous-duty performance.',
    image: circulationPump,
    badge: 'Best Seller',
  },

  // ===== SAND FILTERS & MEDIA =====
  {
    id: 2,
    name: 'Sand Water Filters',
    category: 'filters',
    description:
      'Robust sand filtration systems designed for effective removal of suspended solids and impurities from pool water. Available in various filter diameters and capacities to suit small residential pools to large commercial installations. Compatible with graded filter media such as quartz sand and glass media. Designed for high filtration efficiency, uniform flow distribution, and long service life.',
    image: sandFilter,
  },
  {
    id: 3,
    name: 'Quartz Sand Filter Media',
    category: 'filters',
    description:
      'High-purity graded quartz sand media used in swimming pool sand filters. Available in different grain sizes and grades as per filtration requirements. Ensures superior filtration performance, clear water quality, and extended filter life.',
    image: quartzSand,
  },

  // ===== DISINFECTANT CHEMICALS =====
  {
    id: 4,
    name: 'TCCA 90 Granules',
    category: 'chemicals',
    description:
      'Trichloroisocyanuric Acid (TCCA) 90% granules used for long-lasting pool water disinfection. Supplied in various packaging sizes as per customer requirement. Suitable for routine chlorination, shock treatment, and maintaining hygienic pool water.',
    image: tccaGranules,
    badge: 'Popular',
  },
  {
    id: 5,
    name: 'Copper Sulphate',
    category: 'chemicals',
    description:
      'Copper sulphate chemical used for algae prevention and control in swimming pools. Supplied in different quantities based on pool size and treatment requirement. Effective for controlling biological growth and improving water clarity.',
    image: copperSulphate,
  },
  {
    id: 6,
    name: 'Algae Removal Chemicals',
    category: 'chemicals',
    description:
      'Specially formulated algae control and removal chemicals for green, black, and mustard algae. Available in liquid or granular form and supplied in required volumes as per pool size and treatment application.',
    image: algaeRemoval,
  },

  // ===== UNDERWATER LIGHTING =====
  {
    id: 7,
    name: 'Underwater LED Pool Lights',
    category: 'lights',
    description:
      'Underwater LED lighting solutions designed for swimming pool illumination and aesthetics. Available in single-color and RGB variants, multiple wattages, different LED diode configurations, and various housing designs. Suitable for both decorative and functional lighting applications.',
    image: underwaterLed,
  },
  {
    id: 8,
    name: 'Underwater RGB & Strip Lights',
    category: 'lights',
    description:
      'Waterproof RGB and strip-type LED lighting systems for pools. Available in different power ratings, color options, and installation formats. Designed for energy efficiency, durability, and long operational life in submerged conditions.',
    image: underwaterLed2,
    badge: 'New',
  },

  // ===== LADDERS & ACCESSORIES =====
  {
    id: 9,
    name: 'Stainless Steel Pool Ladders',
    category: 'ladders',
    description:
      'High-quality stainless steel swimming pool ladders designed for safe pool entry and exit. Available in different step configurations, sizes, and mounting styles. Manufactured using corrosion-resistant stainless steel suitable for long-term pool use.',
    image: ladder,
  },

  {
    id: 10,
    name: 'Main Drains with Cover & Frame',
    category: 'accessories',
    description:
      'Swimming pool main drains designed for efficient water circulation and drainage. Available in multiple sizes, shapes, and designs, including variants with drain cover and frame. Suitable for residential and commercial swimming pools.',
    image: drain,
  },

  {
    id: 11,
    name: 'Stainless Steel Holding Bars',
    category: 'accessories',
    description:
      'Stainless steel holding bars designed for pool safety and support. Available in different lengths, shapes, and mounting configurations to suit various pool designs and safety requirements.',
    image: holdingBar,
  },

  {
    id: 12,
    name: 'Vacuum Heads',
    category: 'accessories',
    description:
      'Swimming pool vacuum heads used for manual cleaning of pool floors and walls. Available in different sizes and designs to suit various pool types and cleaning requirements.',
    image: vacuumHead,
  },

  {
    id: 13,
    name: 'Water Test Kits',
    category: 'accessories',
    description:
      'Pool water testing kits for measuring chlorine levels, pH balance, and overall water quality. Supplied in different kit types based on testing requirements.',
    image: waterTestKit,
  },

  // ===== PVC PIPES & FITTINGS =====
  {
    id: 14,
    name: 'PVC Pipes & Fittings',
    category: 'accessories',
    description:
      'High-quality PVC pipes and fittings used in swimming pool plumbing systems. Available in various diameters, pressure ratings, and lengths to meet different installation requirements. Resistant to chemical corrosion and suitable for long-term pool applications.',
    image: pvcEquipment,

  },
  {
    id: 15,
    name: 'PVC Pool Equipment & Accessories',
    category: 'accessories',
    description:
      'Durable PVC-based pool equipment and accessories used in filtration, circulation, and plumbing systems. Available in multiple configurations to match specific pool system designs.',
    image: pvcEquipment,
  },

  // ===== TILES =====
  {
    id: 16,
    name: 'Swimming Pool Tiles',
    category: 'tiles',
    description:
      'Premium swimming pool tiles available in multiple designs, colors, finishes, and sizes. Designed for durability, slip resistance, and long-lasting performance in pool environments.',
    image: allTiles,
  },
  {
  id: 17,
  name: 'Underwater LED Strip Lights',
  category: 'lights',
  description:
    'Underwater LED strip lights designed for decorative and functional pool lighting. Available in multiple LED powers, diode types, color options (single color, RGB, RGBW), voltage and frequency variants. Offered in flexible and rigid strip formats. The image shown represents one model; multiple specifications and custom options are available under this category.',
  image: underwaterStriplight,
  badge: 'Premium',
},

];


  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="products">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero__background"></div>
        <div className="container">
          <div className="products-hero__content">
            <h1 className="products-hero__title">
              Our Products
            </h1>
            <p className="products-hero__description">
              Professional-grade pool equipment with 25+ years of trusted quality.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="products-grid-section section">
        <div className="container">
          {/* Category Filter */}
          <div className="products-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`products-filter__btn ${activeCategory === category.id ? 'products-filter__btn--active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid">
            {filteredProducts.map(product => (
              <article key={product.id} className="product-card">
                <div className="product-card__image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-card__content">
                  <span className="product-card__category">
                    {categories.find(c => c.id === product.category)?.label}
                  </span>
                  <h3 className="product-card__title">{product.name}</h3>
                  <p className="product-card__description">{product.description}</p>
                  <div className="product-card__footer">
                    <Button variant="primary" size="small" to="/contact">
                      Get Quote
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta section">
        <div className="container">
          <div className="products-cta__content">
            <h2 className="products-cta__title">Need Something Specific?</h2>
            <p className="products-cta__description">
              Contact us for custom requirements or bulk orders.
            </p>
            <div className="products-cta__actions">
              <Button variant="primary" size="large" to="/contact">
                Contact Us
              </Button>
              <Button variant="secondary" size="large" href="tel:+919032168378">
                Call: +91 9032168378
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
