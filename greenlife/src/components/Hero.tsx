import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Uma solução que irá <span className="text-green">te entregar saúde e bem-estar</span>
          </h1>
          <p>
            Você sabe que, para alcançar o sucesso, é fundamental ter parceiros 
            que te impulsionem a ir mais longe.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Cadastre-se</button>
            <button className="btn-secondary">Veja mais</button>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600" 
            alt="GreenLife" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;