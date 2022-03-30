import {React, useState} from 'react'
import {UseCartContext} from './CartContext'
import CartItem from './CartItem'
import './cart.css'


const Cart = () => {
  const { CartList, EmptyCart, PriceTotal } = UseCartContext();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

    return (
      <div>
        {loading ? (
          <h1>Loading..</h1>
        ) : (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className='col-md-4'>
        {CartList.map((i) => (
          <CartItem
            key={i.item.id}
            Item={i.item}
            Quantity={i.cantidad}
          />
        ))}
       </div>
              </div>
              <button className="emptyCart"onClick={EmptyCart}>Empty Cart</button>
              <h2>Total: {PriceTotal()} U$D</h2>
            
            </div>
          )}
        </div>
      )};
  



export default Cart