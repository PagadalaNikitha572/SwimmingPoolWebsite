import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div className="footer__content">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">
                <img src={logo} alt="Bhavani Industries" className="footer__logo-image" />
                <div>
                  <span className="footer__logo-name">Bhavani Industries</span>
                  <span className="footer__logo-tagline">Water Treatment Solutions</span>
                </div>
              </div>
              <p className="footer__description">
                Your trusted partner for premium pool and water treatment equipment with 25+ years of experience.
              </p>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__heading">Products</h4>
              <ul className="footer__links">
                <li><Link to="/products">Pumps</Link></li>
                <li><Link to="/products">Sand Filters</Link></li>
                <li><Link to="/products">Chemicals</Link></li>
                <li><Link to="/products">Pool Accessories</Link></li>
              </ul>
            </div>

            <div className="footer__links-group">
              <h4 className="footer__heading">Contact Info</h4>
              <ul className="footer__contact">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>H No: 07-096, J K Nagar, Subhash Nagar, Jeedimetla, Hyderabad 500 055, Telangana</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 9032168378, 9866673304</span>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>info.bhavaniindustrieshyd@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>&copy; {currentYear} Bhavani Industries. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
