import React from 'react'
import { BsCart } from 'react-icons/bs';
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <div className='cartIcon'>
      <a href=""><button className='buttonCart'><BsCart/></button></a>
    </div>
  )
}

export default CartWidget