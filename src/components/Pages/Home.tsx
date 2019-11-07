import React from 'react';

import Project from '../Project/Project';

const projects = [
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  },
  {
    cursorText: '02',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  },
  {
    cursorText: '03',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  },
  {
    cursorText: '04',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  },
  {
    cursorText: '05',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  },
  {
    cursorText: '06',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.'
  }
]

const Home: React.FC = () => {

  return (
    <div>
      { projects.map( (project, index) => {
        return (
          <Project 
            key={index}
            cursorText={project.cursorText}
            image={project.image}
            index={index}
            title={project.title}
            info={project.info}
            description={project.description}
            themeColor={'red'}
          />
      )})}
    </div>
  );
}

export default Home;