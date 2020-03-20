import React from 'react'
import '../style/header.css'

const Header = React.forwardRef((props, ref) => {
  return (
    <header id='home'>
      <div className='header-items'>
        <div className='header-text'>
          <h1>Hi, I'm Errol Highberg</h1>
          <h2>Full Stack Developer</h2>
          <h2>Data Scientist</h2>
        </div>
        <p>Check out my work</p>
      </div>
    </header>
  )
})

export default Header
