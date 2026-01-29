import { useState } from 'react';
import Button from '../components/Button';

// Import high-resolution product images
import circulationPump from '../assets/products/high-res/circulationpump.jpg';
import topMountSandFilter from '../assets/products/high-res/topmountsandfilter.jpg';
import sideMountSandFilter from '../assets/products/high-res/sidemountsandfilter.jpg';
import wallMountSandFilter from '../assets/products/high-res/wallmountsandfilter.jpg';
import cartridgeFilter from '../assets/products/high-res/catridgefilters.jpg';
import filterMedia from '../assets/products/high-res/filtermedia.png';
import underwaterPoolLights from '../assets/products/high-res/underwaterpoollights.jpg';
import poolLadders from '../assets/products/high-res/poolladders.jpg';
import mainDrainCovers from '../assets/products/high-res/maindrainandcovers.jpg';
import nozzle from '../assets/products/high-res/nozzle.jpg';
import wallSkimmers from '../assets/products/high-res/wallskimmers.jpg';
import vacuumHoses from '../assets/products/high-res/vaccumhoses.jpg';
import vacuumHeads from '../assets/products/high-res/vaccumheads.jpg';
import poolCleaningBrush from '../assets/products/high-res/poolcleaningbrush.png';
import leafSkimmers from '../assets/products/high-res/leafskimmers.png';
import telescopicPoles from '../assets/products/high-res/telescopicpoles.png';
import waterTestKit from '../assets/products/high-res/water-test-kit.png';
import tcca from '../assets/products/high-res/tcca.jpg';

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
    {
      id: 1,
      name: 'Pool Circulation Pumps',
      category: 'pumps',
      description:
        'Low-noise swimming pool circulation pumps suitable for residential, commercial, and industrial pools. Available in multiple HP ratings, single-phase and three-phase variants, and different flow capacities.',
      image: circulationPump,
    },
    {
      id: 2,
      name: 'Top Mount Sand Filters',
      category: 'filters',
      description:
        'Top mount sand filters with multiport valves for efficient pool filtration. Available in various diameters and flow rates to suit different pool sizes.',
      image: topMountSandFilter,
    },
    {
      id: 3,
      name: 'Side Mount Sand Filters',
      category: 'filters',
      description:
        'Heavy-duty side mount sand filters designed for high flow rate applications. Compatible with quartz sand and glass filter media.',
      image: sideMountSandFilter,
    },
    {
      id: 4,
      name: 'Wall Mount Sand Filters',
      category: 'filters',
      description:
        'Wall-mounted sand filters ideal for space-saving installations. Efficient filtration with easy maintenance access.',
      image: wallMountSandFilter,
    },
    {
      id: 5,
      name: 'Cartridge Filters',
      category: 'filters',
      description:
        'Cartridge filtration systems suitable for compact pool installations. Available in different filtration areas and flow capacities.',
      image: cartridgeFilter,
    },
    {
      id: 6,
      name: 'Filter Media (Quartz & Glass)',
      category: 'filters',
      description:
        'High-quality quartz sand and glass filter media available in multiple grades and particle sizes.',
      image: filterMedia,
    },
    {
      id: 7,
      name: 'Underwater Pool Lights',
      category: 'lights',
      description:
        'Stainless steel underwater LED pool lights available in white and RGB variants. Multiple wattages and transformer options available.',
      image: underwaterPoolLights,
    },
    {
      id: 8,
      name: 'Swimming Pool Ladders',
      category: 'ladders',
      description:
        'Stainless steel pool ladders including standard, camel, and U-type designs. Available in multiple step configurations.',
      image: poolLadders,
    },
    {
      id: 9,
      name: 'Main Drains & Covers',
      category: 'accessories',
      description:
        'Anti-suction main drain covers and frames available in round and square designs. Suitable for residential and commercial pools.',
      image: mainDrainCovers,
    },
    {
      id: 10,
      name: 'Inlet Nozzles & Fittings',
      category: 'accessories',
      description:
        'ABS inlet nozzles, eyeball fittings, vacuum points, and wall conduits for efficient pool water circulation.',
      image: nozzle,
    },
    {
      id: 11,
      name: 'Wall Skimmers',
      category: 'accessories',
      description:
        'Standard and wide-mouth wall skimmers with decorative face plates. Available in ABS construction.',
      image: wallSkimmers,
    },
    {
      id: 12,
      name: 'Vacuum Hoses',
      category: 'accessories',
      description:
        'Flexible PE and EVA vacuum hoses for pool cleaning. Available in different lengths and materials.',
      image: vacuumHoses,
    },
    {
      id: 13,
      name: 'Vacuum Heads',
      category: 'accessories',
      description:
        'Aluminium and flexible vacuum heads including triangular and swivel models for efficient pool cleaning.',
      image: vacuumHeads,
    },
    {
      id: 14,
      name: 'Pool Cleaning Brushes',
      category: 'accessories',
      description:
        'Wall, algae, and vacuum brushes with nylon or stainless steel bristles. Available in multiple sizes.',
      image: poolCleaningBrush,
    },
    {
      id: 15,
      name: 'Leaf Skimmers & Rakes',
      category: 'accessories',
      description:
        'Leaf skimmers and rakes designed for removing debris from pool surfaces and floors.',
      image: leafSkimmers,
    },
    {
      id: 16,
      name: 'Telescopic Poles',
      category: 'accessories',
      description:
        'Aluminium telescopic poles compatible with brushes, skimmers, and vacuum heads.',
      image: telescopicPoles,
    },
    {
      id: 17,
      name: 'Water Test Kits',
      category: 'accessories',
      description:
        'Swimming pool water testing kits for measuring pH and chlorine levels, including refill solutions.',
      image: waterTestKit,
    },
    {
      id: 18,
      name: 'Pool Chemicals (TCCA)',
      category: 'chemicals',
      description:
        'Pool disinfection and water treatment chemicals including TCCA, calcium hypochlorite, algae control, and pH balance solutions.',
      image: tcca,
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
