import React from 'react'

const Header = props => {
  return (
    <header>
      <div className='header-items'>
        <div className='header-text'>
          <h1>Errol Highberg</h1>
          <h3>Full Stack Developer</h3>
          <h3>Data Scientist</h3>
        </div>
        <a target="_blank" rel="noopener noreferrer" href='#projects'>Check out my work</a>
      </div>
    </header>
  )
}

export default Header
