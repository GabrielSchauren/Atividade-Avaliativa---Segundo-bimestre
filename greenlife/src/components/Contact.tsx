import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', motivo: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.motivo) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ email: '', motivo: '' });
    }
  };

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Entre em contato</span>
          <h2>Fale com a GreenLife</h2>
          <p>
            Entre em contato, estamos dispostos a tirar qualquer dúvida, 
            seja um orçamento, uma dúvida técnica de algum de nossos produtos. 
            Estamos à disposição para responder 😊
          </p>
        </div>
        
        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="email">Seu melhor e-mail</label>
              <input
                type="email"
                id="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="motivo">Motivo do contato</label>
              <textarea
                id="motivo"
                placeholder="Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                value={formData.motivo}
                onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                required
                rows={4}
              />
            </div>
            
            <button type="submit" className="btn-primary">
              Enviar <Send size={18} />
            </button>
            
            {submitted && (
              <div className="contact-success">
                ✅ Mensagem enviada com sucesso!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;