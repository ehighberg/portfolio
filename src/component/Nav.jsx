import React from 'react'

const Nav = props => {
  return (
    <nav>
      <div className='nav-name'>
        <a href='#home'>Errol Highberg</a>
      </div>
      <div className='nav-items'>
        <a href='#projects'>Projects</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

export default Nav
