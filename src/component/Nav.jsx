import React from 'react'
import '../style/nav.css'

const Nav = props => {
  return (
    <nav>
      <div className='nav-name'>
        <p>Errol Highberg</p>
      </div>
      <div className='nav-items'>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>
    </nav>
  )
}

export default Nav
