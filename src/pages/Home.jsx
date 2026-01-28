import { Link } from 'react-router-dom';
import Button from '../components/Button';

// Import product images for homepage
import pumpImg from '../assets/products/circulation-pump.png';
import filterImg from '../assets/products/sand-filter.png';
import chemicalImg from '../assets/products/tcca-granules.png';
import ladderImg from '../assets/products/ladder.png';

import './Home.css';

const Home = () => {
  const products = [
    {
      title: 'Circulation Pumps',
      description: 'Energy-efficient pumps in all HP ranges.',
      image: pumpImg,
      link: '/products',
    },
    {
      title: 'Sand Filters',
      description: 'High-performance filtration systems.',
      image: filterImg,
      link: '/products',
    },
    {
      title: 'Chemicals',
      description: 'TCCA-90, copper sulphate, algaecides.',
      image: chemicalImg,
      link: '/products',
    },
    {
      title: 'Accessories',
      description: 'Ladders, lights, tiles, drains & more.',
      image: ladderImg,
      link: '/products',
    },
  ];

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      title: '25+ Years Experience',
      description: 'Trusted expertise in water treatment.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M16 8l-4 4-4-4M16 12l-4 4-4-4"/>
        </svg>
      ),
      title: 'Premium Quality',
      description: 'Only the finest equipment.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
      title: 'Expert Support',
      description: 'Professional guidance always.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: 'Pan India Delivery',
      description: 'Fast shipping across India.',
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content container">
          <div className="hero__text">
            <span className="hero__badge">Bhavani Industries</span>
            <h1 className="hero__title">
              Premium Pool & Water Treatment Equipment
            </h1>
            <p className="hero__description">
              Your trusted partner with 25+ years of expertise. Pumps, filters, chemicals & accessories.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="large" to="/products">
                Browse Products
              </Button>
              <Button variant="white" size="large" to="/contact">
                Get Free Quote
              </Button>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__images">
              <div className="hero__image-main">
                <img src="/pool-equipment-site/swimming-pool.png" alt="Swimming Pool" />
              </div>
              <div className="hero__image-secondary">
                <img src="/pool-equipment-site/pool2.png" alt="Pool Design" />
              </div>
              <div className="hero__image-accent"></div>
            </div>
          </div>
        </div>
        <div className="hero__wave">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 0L60 8C120 16 240 32 360 40C480 48 600 48 720 44C840 40 960 32 1080 28C1200 24 1320 24 1380 24L1440 24V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-value">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">200+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Pan India</span>
              <span className="stat-label">Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview Section */}
      <section className="products-overview section">
        <div className="container">
          <div className="products-overview__header text-center">
            <h2 className="section-title mx-auto">Our Products</h2>
            <p className="section-subtitle mx-auto">
              Complete range of pool equipment for filtration, sanitation & maintenance.
            </p>
          </div>
          <div className="products-overview__grid">
            {products.map((product, index) => (
              <Link to={product.link} key={index} className="product-overview-card">
                <div className="product-overview-card__image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-overview-card__content">
                  <h3 className="product-overview-card__title">{product.title}</h3>
                  <p className="product-overview-card__description">{product.description}</p>
                  <span className="product-overview-card__link">
                    View Products
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="products-overview__cta text-center">
            <Button variant="primary" size="large" to="/products">
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us section">
        <div className="container">
          <div className="why-us__header text-center">
            <h2 className="section-title mx-auto">Why Choose Bhavani Industries</h2>
            <p className="section-subtitle mx-auto">
              Trusted by professionals across India for quality and reliability.
            </p>
          </div>
          <div className="why-us__features-grid">
            {features.map((feature, index) => (
              <div key={index} className="why-us__feature-card">
                <div className="why-us__feature-icon">
                  {feature.icon}
                </div>
                <h4 className="why-us__feature-title">{feature.title}</h4>
                <p className="why-us__feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__background">
          <div className="cta-section__pattern"></div>
        </div>
        <div className="container">
          <div className="cta-section__content text-center">
            <h2 className="cta-section__title">Ready to Get Started?</h2>
            <p className="cta-section__description">
              Contact us for expert advice and free quotes.
            </p>
            <div className="cta-section__actions">
              <Button variant="white" size="large" to="/contact">
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

export default Home;
