import React from 'react'
import CartItem from './CartItem'
import {items} from './InitalCart'
function Cart() {
  return (
    <div>
      <CartItem initialItems={items} />
    </div>
  );
}

export default Cart;