import React from 'react'

import ProjectCard from './ProjectCard'
import projectList from '../projectList'

const Projects = React.forwardRef((props, ref) => {
  return (
    <main>
      <h1>Projects</h1>
      {projectList.map((project, i) =>
        <ProjectCard project={project} key={i} />
      )}
    </main>
  )
})

export default Projects
