import React from 'react';

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>{item.price.toFixed(2)}</span>
      <button onClick={() => onRemoveFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
 