import React from 'react'

const Nav = props => {
  return (
    <nav>
      <div className='nav-name'>
        <a target="_blank" rel="noopener noreferrer" href='#home'>Errol Highberg</a>
      </div>
      <div className='nav-items'>
        <a target="_blank" rel="noopener noreferrer" href='#projects'>Projects</a>
        <a target="_blank" rel="noopener noreferrer" href='#about'>About</a>
        <a target="_blank" rel="noopener noreferrer" href='#contact'>Contact</a>
      </div>
    </nav>
  )
}

export default Nav
