import React, { useRef } from 'react'

import Nav from './component/Nav'
import Header from './component/Header'
import Projects from './component/Projects'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Header ref={useRef()} />
      <Projects ref={useRef()} />
      <About ref={useRef()} />
      <Contact ref={useRef()} />
    </React.Fragment>
  )
}

export default App
