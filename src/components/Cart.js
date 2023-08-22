import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onRemoveFromCart }) => {
  const subtotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} onRemoveFromCart={onRemoveFromCart} />
      ))}
      <div className="subtotal">
        <p>Total Items: {cart.length}</p>
        <p>Subtotal: {subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
