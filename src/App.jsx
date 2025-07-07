// src/App.jsx
import React from 'react';
import './App.css'; // Importa os estilos globais para o App
import Header from './components/Header'; // Importa o componente Header
import ProductList from './components/ProductList'; // Importa o componente ProductList
import Footer from './components/Footer'; // Importa o componente Footer
import { productsData } from './data/productsData'; // Importa os dados dos produtos

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="app-main">
        <ProductList products={productsData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
