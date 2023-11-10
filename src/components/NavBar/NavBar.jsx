import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


export const NavBar = () => {
  return (
    <div className='navContainer'>
        <nav className='nav'>
            <div className='logo-div'>
            <a href=""><img className='logo' src="/src/assets/img/logo.png" alt="logo compumundohipermegared"/></a>
            </div>
            <ul className='ul'>
                <li className='li'><a href=""><button className='buttonMenu'>PC's Armadas</button></a></li>
                <li className='li'><a href=""><button className='buttonMenu'>Notebooks</button></a></li>
            <li className='li'><a href=""><button className='buttonMenu'>Periféricos</button></a></li>
                <li className='li'><a href=""><button className='buttonMenu'>Monitores</button></a></li>
            </ul>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default NavBar