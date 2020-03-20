import React from 'react'
import '../style/about.css'

const About = React.forwardRef((props, ref) => {
  return (
    <summary id='about'>
      <h1>About Me</h1>
      <p className='about-main'>Full-stack developer and data scientist, driven to understand systems and their interactions. Reinforced by attention to detail and determination, I welcome and conquer challenges in any domain.</p>
      <br />
      <p className='about-zinger'>Ask me about high-concept science-fiction or non-Newtonian calculus.</p>
      <div className='about-links'>
        <a target="_blank" rel="noopener noreferrer" href='RESUME'>
          <img className='about-icon' alt='resume-icon' src='https://s3.amazonaws.com/image-urls/images/resume-icon-16.jpg' />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/errol-highberg'>
          <img className='about-icon' alt='linkedin-icon' src='https://s3.amazonaws.com/image-urls/images/square-linkedin-512.png' />
        </a>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/ehighberg'>
          <img className='about-icon' alt='github-icon' src='https://s3.amazonaws.com/image-urls/images/githubicon.png' />
        </a>
      </div>
    </summary>
  )
})

export default About
