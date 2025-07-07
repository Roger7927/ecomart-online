// src/components/ProductCard.jsx
import React from 'react';
// Não criaremos ProductCard.css agora, os estilos virão de App.css para simplificar.
// Pode remover a linha abaixo ou deixar comentada por enquanto.
// import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">R$ {product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button">Adicionar ao Carrinho</button>
      </div>
    </div>
  );
}

export default ProductCard;
