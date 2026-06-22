import React from 'react';
import { Leaf, Sparkles, Shield } from 'lucide-react';
import './Solutions.css';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Leaf size={48} color="#16a34a" />,
      title: 'Produtos 100% Naturais',
      description: 'Nossos produtos são feitos com ingredientes 100% naturais, sem conservantes ou aditivos químicos prejudiciais à saúde.'
    },
    {
      icon: <Sparkles size={48} color="#16a34a" />,
      title: 'Cosméticos Veganos',
      description: 'Linha completa de cosméticos veganos, cruelty-free, com ingredientes orgânicos e sustentáveis.'
    },
    {
      icon: <Shield size={48} color="#16a34a" />,
      title: 'Suplementos de Qualidade',
      description: 'Suplementos alimentares com alta concentração de nutrientes, certificados e com garantia de procedência.'
    }
  ];

  return (
    <section id="solucoes" className="solutions">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Soluções</span>
          <h2>Sob medida para você</h2>
          <p>
            Inovação é com a gente! A <strong>GreenLife</strong> já conquistou diversos clientes, 
            seja você mais um deles, veja tudo o que pode ganhar com nossos serviços.
          </p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((sol, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{sol.icon}</div>
              <h3>{sol.title}</h3>
              <p>{sol.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;