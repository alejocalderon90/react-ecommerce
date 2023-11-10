import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({title}) => {
  return (
    <div className='itemListContainer'>
      <h1 className='itemListTitle'>{title}</h1>
      <div className='itemCard'>card1</div>
      <div className='itemCard'>card2</div>
      <div className='itemCard'>card3</div>
      <div className='itemCard'>card4</div>
      <div className='itemCard'>card5</div>
      <div className='itemCard'>card6</div>
    </div>
  )
}

export default ItemListContainer