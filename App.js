import React, { useState } from 'react';
import './App.css';
import ShoeForm from './ShoeForm';
import ShoeList from './ShoeList';

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Shoe Store</h1>
      <ShoeForm onAddProduct={handleAddProduct} />
      <ShoeList products={products} onDeleteProduct={handleDeleteProduct} />
    </div>
  );
}

export default App;
