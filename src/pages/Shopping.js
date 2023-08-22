import React, { useState } from 'react';

import Product from '../components/Product';
import Cart from '../components/Cart';

const productsData = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
  // Add more products
];

const Shopping = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (item) => {
    const updatedCart = cart.filter(product => product.id !== item.id);
    setCart(updatedCart);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', minHeight: '70vh' }}>
      <h1>Shopping App</h1>
      <div className="products">
        {productsData.map(product => (
          <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

export default Shopping