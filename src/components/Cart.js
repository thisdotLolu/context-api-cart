import { useContext } from "react"
import './Cart.css'
import CartContext from "../context/cart/CartContext"
import React from 'react'
import {FaTimes} from 'react-icons/fa'
import CartItem from "./CartItem"

const Cart = () => {
  const {showCart, cartItems,showhideCart}=useContext(CartContext)
    
  return (
      <>
      {showCart && (
          <div className="cart__wrapper">
              <div style={{textAlign:'right'}}>
                  <FaTimes
                  onClick={showhideCart}
                  />
              </div>
              <div className="cart__innerWrapper">
                  {cartItems.length===0?(<h4>Cart is empty</h4>):(
                      <ul>
                          {cartItems.map(item=>{
                              <CartItem key={item._id} item={item}/>
                          })
                          }
                      </ul>
                  )}
              </div>
              <div className="Cart__cartTotal">
                  <div>
                      Cart Total
                  </div>
                  <div></div>
                  <div style={{marginLeft:5}}>{
                      cartItems.reduce((amount,item)=>{
                          return item.price + amount
                      },0)
                  }</div>
              </div>
          </div>
      )}
      </>
  )
}

export default Cart;