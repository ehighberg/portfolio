import React, { createRef } from 'react'

import Nav from './component/Nav'
import Header from './component/Header'
import Projects from './component/Projects'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <React.Fragment>
      <Header ref={createRef()} />
      <Nav />
      <Projects ref={createRef()} />
      <About ref={createRef()} />
      <Contact ref={createRef()} />
    </React.Fragment>
  )
}

export default App
