import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

const App = () => {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;
