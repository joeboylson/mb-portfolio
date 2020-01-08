import React from 'react';
import Project from '../Project/Project';

const projects = [
  {
    route: 'localpost',
    cursorText: '01',
    image: `${process.env.PUBLIC_URL}/images/home/localPost.png`,
    title: 'Local Post',
    info: <span>Branding<br/>June 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354'    
  },
  {
    route: 'metro',
    cursorText: '02',
    image: `${process.env.PUBLIC_URL}/images/home/metro.png`,
    title: 'Cincinnati Metro',
    info: <span>Branding<br/>June 2016</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#B6BCBF'
  },
  {
    route: 'veronica',
    cursorText: '03',
    image: `${process.env.PUBLIC_URL}/images/home/vs.png`,
    title: 'Veronica Stanton',
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    info: <span>Branding, Photography, Illustration and Videography<br/>August 2019</span>,
    themeColor: '#f0ddd1' 
  },
  {
    route: 'sda',
    cursorText: '04',
    image: `${process.env.PUBLIC_URL}/images/home/sda.png`,
    title: 'SDA',
    info: <span>Branding<br/>February 2019</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#407EC9' 
  },
  {
    route: 'roamio',
    cursorText: '05',
    image: `${process.env.PUBLIC_URL}/images/home/roamio.png`,
    title: 'Roamio',
    info: <span>UX Design<br/>Continuous</span>,
    description: 'Partnering with a local restaurant and bar to refresh their look and name, I developed an inspired brand ecosystem that brought an idea to life. See how.',
    themeColor: '#E52354' 
  },
  {
    route: 'localpost',
    cursorText: '06',
    image: `${process.env.PUBLIC_URL}/images/home/motion.gif`,
    title: 'Kinetic Reel',
    info: <span>Motion Design<br/>Continuous</span>,
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