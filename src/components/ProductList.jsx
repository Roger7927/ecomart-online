// src/components/ProductList.jsx
import React from 'react';
import ProductCard from './ProductCard'; // Importa o componente ProductCard
// Não criaremos ProductList.css agora, os estilos virão de App.css para simplificar.
// Pode remover a linha abaixo ou deixar comentada por enquanto.
// import './ProductList.css';

function ProductList({ products }) {
  return (
    <section className="product-list-section">
      <h2 className="section-title">Nossos Produtos Exclusivos</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
