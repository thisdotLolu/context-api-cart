import React from 'react'
import CartContext from '../context/cart/CartContext'
import { useContext } from 'react'
import './CartItem.css'


const CartItem = ({item}) => {
    const{removeItem}=useContext(CartContext)
  return (
    <li className='CartItem__item'>
        <img src={item.image} alt='img'/>
        <div>
            {item.name}
        </div>
        <button className='CartItem__button' onClick={()=>removeItem(item.id)}></button>
    </li>
  )
}

export default CartItem