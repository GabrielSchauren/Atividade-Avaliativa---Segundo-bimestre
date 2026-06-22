import React from 'react';
import { categories } from '../data/products';
import './CategorySection.css';

const CategorySection: React.FC = () => {
  return (
    <section id="categorias" className="categories">
      <div className="container">
        <h2>
          Nossas <span className="text-green">Categorias</span>
        </h2>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} produtos</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;