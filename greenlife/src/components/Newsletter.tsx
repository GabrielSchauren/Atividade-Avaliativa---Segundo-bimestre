import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h2>Receba Nossas Novidades</h2>
          <p>
            Inscreva-se para receber ofertas exclusivas, dicas de bem-estar e novidades sobre produtos naturais.
          </p>
          
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              Inscrever <Send size={16} />
            </button>
          </form>
          
          {submitted && (
            <div className="newsletter-success">
              ✅ Inscrição realizada com sucesso!
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;