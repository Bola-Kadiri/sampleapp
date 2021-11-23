import React from "react";
import './CartList.css'

function CartList({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const subtractOne = () => updateQty(id, qty - 1);
  return (
    <div className="Cart-item">
      <div>{name}</div>
      <div>{'\u20A6'}{price}</div>
      <div>
        <button onClick={subtractOne} disabled={qty === 0} style={{backgroundColor:'#db741a'}}>
        <i className='fas fa-minus'/>
        </button>
        {qty}
        <button onClick={addOne}style={{backgroundColor:'#db741a'}}><i className='fas fa-plus'/></button>
      </div>
      <div>Sub-Total: {'\u20A6'}{qty * price} </div>
    </div>
  );
}

export default CartList;
