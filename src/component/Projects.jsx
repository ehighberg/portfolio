import React from 'react'

import ProjectCard from './ProjectCard'
import '../style/projects.css'
import projectList from '../projectList'

const Projects = React.forwardRef((props, ref) => {
  return (
    <main>
      <h1>Projects</h1>
      <div className='projects-container'>
        {projectList.map((project, i) =>
          <ProjectCard project={project} key={i} />
        )}
      </div>
    </main>
  )
})

export default Projects
