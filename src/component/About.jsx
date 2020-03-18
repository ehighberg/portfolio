import React from 'react'

const About = React.forwardRef((props, ref) => {
  return (
    <summary>
      <h1>About Me</h1>
      <p className='about-main'>Lorem Ipsum Dolor</p>
      <p className='about-zinger'>Lorem Ipsum Dolor</p>
      <ul className='about-links'>
        <li><a target="_blank" rel="noopener noreferrer" href='RESUME'>Resume</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='LINKEDIN'>LinkedIn</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href='GITHUB'>Github</a></li>
      </ul>
    </summary>
  )
})

export default About
