import React from 'react'

const ProjectCard = props => {
  const { name, thumbUrl, projectType, description,
    siteUrl, gitUrl, techList } = props.project

  const techUrls = {
    react: 'https://s3.amazonaws.com/image-urls/images/react_icon.png',
    js: 'https://s3.amazonaws.com/image-urls/images/jsicon.png',
    node: 'https://s3.amazonaws.com/image-urls/images/nodejs.png',
    html: 'https://s3.amazonaws.com/image-urls/images/htmlicon.png',
    css: 'https://s3.amazonaws.com/image-urls/images/css.png',
    ruby: 'https://s3.amazonaws.com/image-urls/images/ruby.png',
    d3: 'https://raw.githubusercontent.com/d3/d3-logo/master/d3.png',
    python: 'https://www.python.org/static/opengraph-icon-200x200.png',
    keras: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Keras_Logo.jpg',
    sklearn: 'https://www.stat4decision.com/wp-content/uploads/2017/09/scikit-learn.png',
    numpy: 'https://user-images.githubusercontent.com/98330/63813335-20cd4b80-c8e2-11e9-9c04-e4dbf7285aa1.png',
    django: 'http://icon-library.com/images/django-icon/django-icon-0.jpg',
    celery: 'https://cdn.imgbin.com/3/22/11/imgbin-celery-python-node-js-task-celery-kP1fb5f1qcX0BFDbhueH7e9zJ.jpg'
  }

  const fetchImgUrl = tech => techUrls[tech]

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
          <a target="_blank" rel="noopener noreferrer" href={gitUrl}>{gitUrl ? 'Github' : ''}</a>
        </div>
        <div className='project-card-tech-container'>
          <p>Technologies used</p>
          <ul className='project-card-tech-list'>
            {techList.map((tech, i) => (
              <li key={i}><img className='project-card-tech-img' alt='tech used' src={fetchImgUrl(tech)}/></li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

export default ProjectCard
