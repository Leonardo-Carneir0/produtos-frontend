import React, { useState } from 'react';
import api from '../services/api';

const ProductForm = ({ fetchProducts }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/produtos', { nome, descricao, preco });
      setMessage('Produto adicionado com sucesso!');
      fetchProducts(); // Atualiza a lista de produtos
    } catch (err) {
      setMessage('Erro ao adicionar produto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>
      <div>
        <label>Descrição</label>
        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </div>
      <div>
        <label>Preço</label>
        <input value={preco} onChange={(e) => setPreco(e.target.value)} />
      </div>
      <button type="submit">Adicionar Produto</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default ProductForm;
