// src/components/Header.jsx
import React from 'react';
// Não criaremos Header.css agora, os estilos virão de App.css para simplificar.
// Pode remover a linha abaixo ou deixar comentada por enquanto.
// import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="store-title">EcoMart: Sua Loja Online</h1>
        <p className="tagline">Luxo e Modernidade ao Seu Alcance</p>
      </div>
      <nav className="main-nav">
        <ul>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#carrinho">Carrinho</a></li>
          <li><a href="#sobre">Sobre Nós</a></li>
          {/* Adicione mais links de navegação aqui */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
