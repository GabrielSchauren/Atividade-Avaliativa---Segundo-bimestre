import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid: React.FC = () => {
  return (
    <section id="produtos" className="product-grid-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Produtos</span>
          <h2>Produtos em <span className="text-green">Destaque</span></h2>
          <p>Produtos naturais que conectam você à saúde e bem-estar</p>
        </div>
        
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="product-grid-footer">
          <button className="btn-primary">Ver todos os produtos</button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;