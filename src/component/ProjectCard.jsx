import React from 'react'

const ProjectCard = props => {
  const { name, thumbUrl, projectType, description,
    siteUrl, gitUrl, techList } = props.project

  return (
    <article>
      <img alt={`project ${name} thumbnail`} src={thumbUrl} />
      <section>
        <h1><a target="_blank" rel="noopener noreferrer" href={siteUrl}>{name}</a></h1>
        <h3>{projectType}</h3>
        <p className='project-card-description'>{description}</p>
        <a target="_blank" rel="noopener noreferrer" href={siteUrl}>Website</a>
        <a target="_blank" rel="noopener noreferrer" href={gitUrl}>Github</a>
        <p>Technologies used</p>
        <ul>
          {techList.map((tech, i) => (
            <li key={i}><p className='project-tech-img'>{tech}</p></li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export default ProjectCard
