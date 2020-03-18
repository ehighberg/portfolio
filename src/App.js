import React from 'react'

import Nav from './component/Nav'
import Header from './component/Header'
import Projects from './component/Projects'
import About from './component/About'
import Contact from './component/Contact'

const App = () => {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Projects />
      <About />
      <Contact />
    </React.Fragment>
  )
}

export default App
