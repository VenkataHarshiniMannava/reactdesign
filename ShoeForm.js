import React, { useState } from 'react';

const ShoeForm = ({ onAddProduct }) => {
  const [shoeName, setShoeName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [L, setL] = useState('');
  const [M, setM] = useState('');
  const [S, setS] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({ shoeName, description, price, L, M, S });
    setShoeName('');
    setDescription('');
    setPrice('');
    setL('');
    setM('');
    setS('');
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label>Shoe Name</label>
        <input
          type="text"
          value={shoeName}
          onChange={(e) => setShoeName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>L</label>
        <input
          type="text"
          value={L}
          onChange={(e) => setL(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>M</label>
        <input
          type="text"
          value={M}
          onChange={(e) => setM(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>S</label>
        <input
          type="text"
          value={S}
          onChange={(e) => setS(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ShoeForm;
