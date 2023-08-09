import React from 'react';

const ShoeList = ({ products, onDeleteProduct }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <div key={index} className="product">
          <h3>{product.shoeName}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>L: {product.L}</p>
          <p>M: {product.M}</p>
          <p>S: {product.S}</p>
          <button onClick={() => onDeleteProduct(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ShoeList;
