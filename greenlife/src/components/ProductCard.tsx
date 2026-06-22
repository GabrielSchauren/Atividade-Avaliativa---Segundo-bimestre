import React from 'react';
import type { Product } from '../types';
import { ShoppingCart, Star } from 'lucide-react';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.badge && (
          <span className="product-badge">{product.badge}</span>
        )}
        <button className="product-cart-btn">
          <ShoppingCart size={20} />
        </button>
      </div>
      
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </span>
          <div className="product-rating">
            <Star size={16} fill="#fbbf24" color="#fbbf24" />
            <span>4.8</span>
          </div>
        </div>
        
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        
        <div className="product-footer">
          <span className="product-price">R$ {product.price.toFixed(2)}</span>
          <button className="product-details-btn">Ver detalhes →</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;