// src/components/Footer.jsx
import React from 'react';
// Não criaremos Footer.css agora, os estilos virão de App.css para simplificar.
// Pode remover a linha abaixo ou deixar comentada por enquanto.
// import './Footer.css';

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <p>&copy; 2025 EcoMart. Todos os direitos reservados. Design e Tecnologia para o Futuro.</p>
        <div className="social-links">
          {/* Pode adicionar ícones de redes sociais aqui */}
          <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
