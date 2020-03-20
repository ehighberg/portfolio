import React from 'react'
import '../style/nav.css'

const Nav = props => {
  return (
    <nav>
      <div className='nav-name'>
        <p><a href='#home'>Errol Highberg</a></p>
      </div>
      <div className='nav-items'>
        <p><a href='#projects'>Projects</a></p>
        <p><a href='#about'>About</a></p>
        <p><a href='#contact'>Contact</a></p>
      </div>
    </nav>
  )
}

export default Nav
