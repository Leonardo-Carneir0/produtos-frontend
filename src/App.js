// src/App.js
import React from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const fetchProducts = () => {
    // Lógica para atualizar a lista de produtos
    // Pode ser uma chamada a uma função que recarrega os produtos
  };

  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductForm fetchProducts={fetchProducts} />
      <ProductList />
    </div>
  );
};

export default App;