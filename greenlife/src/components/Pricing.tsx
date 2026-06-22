import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Plano Mensal',
      price: 'R$ 49,90',
      period: '/mês',
      description: 'Receba uma caixa com produtos selecionados todo mês',
      features: [
        '3 produtos naturais por mês',
        'Frete grátis',
        'Desconto em produtos avulsos',
        'Cancelamento fácil'
      ],
      buttonText: 'Assinar',
      popular: false,
      badge: '1º MÊS GRÁTIS'
    },
    {
      name: 'Plano Trimestral',
      price: 'R$ 39,90',
      period: '/mês',
      description: 'Economize com a assinatura trimestral',
      features: [
        '3 produtos naturais por mês',
        'Frete grátis',
        '10% de desconto em produtos avulsos',
        'Kit surpresa exclusivo',
        'Cancelamento fácil'
      ],
      buttonText: 'Assinar',
      popular: true
    },
    {
      name: 'Plano Semestral',
      price: 'R$ 34,90',
      period: '/mês',
      description: 'A melhor economia para quem ama produtos naturais',
      features: [
        '4 produtos naturais por mês',
        'Frete grátis',
        '15% de desconto em produtos avulsos',
        'Kit surpresa exclusivo',
        'Brinde especial a cada 6 meses',
        'Cancelamento fácil'
      ],
      buttonText: 'Assinar',
      popular: false
    }
  ];

  return (
    <section id="precos" className="pricing">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Planos e preços</span>
          <h2>Nossos planos</h2>
        </div>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
              {plan.popular && <div className="popular-badge">⭐ Mais Popular</div>}
              <h3>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">
                <span className="price">{plan.price}</span>
                {plan.period && <span className="period">{plan.period}</span>}
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} color="#16a34a" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={plan.popular ? 'btn-primary' : 'btn-outline'}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;