import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <Leaf size={32} color="#16a34a" />
          <span>GreenLife</span>
        </div>

        <nav className="nav-desktop">
          <a href="#">Home</a>
          <a href="#solucoes">Soluções</a>
          <a href="#produtos">Produtos</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#precos">Planos</a>  
          <a href="#contato">Contato</a>
          <a href="#" className="nav-login">Login</a>
          <a href="#" className="nav-signup">Cadastre-se</a>
        </nav>

        <div className="header-actions">
          <button className="cart-btn">
            <ShoppingCart size={24} />
            <span className="cart-badge">3</span>
          </button>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav>
            <a href="#">Home</a>
            <a href="#solucoes">Soluções</a>
            <a href="#produtos">Produtos</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#precos">Planos</a>  
            <a href="#contato">Contato</a>
            <a href="#" className="nav-login">Login</a>
            <a href="#" className="nav-signup">Cadastre-se</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;