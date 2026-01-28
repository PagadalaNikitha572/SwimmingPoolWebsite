import Button from './Button';
import './ProductCard.css';

const ProductCard = ({ product, showDetails = true }) => {
  return (
    <article className="product-card">
      <div className="product-card__image">
        <img src={product.image} alt={product.name} />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </div>
      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>
        {product.features && showDetails && (
          <ul className="product-card__features">
            {product.features.map((feature, index) => (
              <li key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
        {product.price && (
          <div className="product-card__price">
            <span className="product-card__price-label">Starting from</span>
            <span className="product-card__price-value">${product.price}</span>
          </div>
        )}
        <div className="product-card__actions">
          <Button variant="primary" size="small" to="/contact">
            Get Quote
          </Button>
          <Button variant="ghost" size="small" to="/products">
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
