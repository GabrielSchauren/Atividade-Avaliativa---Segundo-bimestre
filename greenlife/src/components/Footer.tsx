import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <span style={{ fontSize: '32px' }}>🌱</span>
              <span>GreenLife</span>
            </div>
            <p>Conectando você à natureza com produtos que fazem bem para você e para o planeta.</p>
          </div>
          
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Faça parte do time</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Produtos</h4>
            <ul>
              <li><a href="#">Produtos Naturais</a></li>
              <li><a href="#">Cosméticos</a></li>
              <li><a href="#">Alimentação Saudável</a></li>
              <li><a href="#">Suplementos</a></li>
            </ul>
          </div>
          
          <div>
            <h4>Atendimento</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Entregas</a></li>
              <li><a href="#">Trocas e Devoluções</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          Gabriel Alex Junior Schauren ⚙️ ©2026 GreenLife - Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;