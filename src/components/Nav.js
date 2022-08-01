import React, { useContext } from 'react'
import {FaSearch,FaShoppingCart} from 'react-icons/fa'
import './Nav.css'
import CartContext from '../context/cart/CartContext'


const Nav = () => {
    const{cartItems,showHideCart}=useContext(CartContext)
  return (
    <nav>
        <div className='nav__left'>Store</div>
        <div className="nav__middle">
            <div className="input__wrapper">
                <input type="text" />
                <FaSearch/>
            </div>
        </div>
        <div className="nav__right">
            <div className="cart__icon">
                <FaShoppingCart
                onClick={showHideCart}
                />
                {cartItems.length > 0 && <div className='item__count'>
                <span>{cartItems.length}</span>
                </div>}
            </div>
        </div>
    </nav>
  )
}

export default Nav