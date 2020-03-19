import React from 'react'

const ProjectCard = props => {
  const { name, thumbUrl, projectType, description,
    siteUrl, gitUrl, techList } = props.project

  return (
    <article>
      <a target="_blank" rel="noopener noreferrer" href={siteUrl}>
        <div className='project-card-bg'
          style={{
            'backgroundImage': `url(${thumbUrl})`
          }}>
        </div>
      </a>
      <section className='project-card-info-container'>
        <a target="_blank" rel="noopener noreferrer" href={siteUrl}>{name}</a>
        <h3>{projectType}</h3>
        <p className='project-card-description'>{description}</p>
        <div className='project-card-links'>
          <a target="_blank" rel="noopener noreferrer" href={siteUrl}>Website</a>
          <a target="_blank" rel="noopener noreferrer" href={gitUrl}>Github</a>
        </div>
        <div className='project-card-tech-container'>
          <p>Technologies used</p>
          <ul className='project-card-tech-list'>
            {techList.map((tech, i) => (
              <li key={i}><p className='project-card-tech-img'>{tech}</p></li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default ProjectCard
