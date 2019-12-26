import React from 'react';
import Project from '../Project/Project';

const projects = [
  {
    route: 'localpost',
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354'    
  },
  {
    route: 'localpost',
    cursorText: '02',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#ffffff'
  },
  {
    route: 'localpost',
    cursorText: '03',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354' 
  },
  {
    route: 'localpost',
    cursorText: '04',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354' 
  },
  {
    route: 'localpost',
    cursorText: '05',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354' 
  },
  {
    route: 'localpost',
    cursorText: '06',
    image: 'https://via.placeholder.com/1500x1500',
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354' 
  }
]

export interface HomeProps {
  setRoute: any;
}

const Home: React.FC<HomeProps> = (Props) => {

  return (
    <div id={'home'}>
      { projects.map( (project, index) => {
        return (
          <Project 
            key={index}
            route={project.route}
            cursorText={project.cursorText}
            image={project.image}
            index={index}
            title={project.title}
            info={project.info}
            description={project.description}
            themeColor={project.themeColor}
            setRoute={Props.setRoute}
          />
      )})}
    </div>
  );
}

export default Home;