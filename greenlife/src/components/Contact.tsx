import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const form = e.currentTarget;
    const formDataObj = new FormData(form);
    
    
    const data = {
      email: formDataObj.get('email') as string,
      message: formDataObj.get('message') as string,
      'form-name': 'contact',
    };
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormData({ email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Erro ao enviar. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label htmlFor="email">Seu melhor e-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Motivo do contato</label>
              <textarea
                id="message"
                name="message"
                placeholder="Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'} <Send size={18} />
            </button>
            
            {submitted && (
              <div className="contact-success">
                ✅ Mensagem enviada com sucesso!
              </div>
            )}
            {error && (
              <div className="contact-error" style={{ color: 'red', marginTop: '12px' }}>
                ❌ {error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;