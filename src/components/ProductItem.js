import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <h3>{product.nome}</h3>
      <p>{product.descricao}</p>
      <p>{product.preco}</p>
      <p>{product.dataCriacao}</p>
    </div>
  );
};

export default ProductItem;
