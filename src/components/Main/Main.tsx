import React from 'react';
import './Main.css';

import Highlight from '../Highlight/Highlight'
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

export interface MainProps {
  style: React.CSSProperties
}

const Main: React.FC<MainProps> = (Props) => {
  return (
    <div id='main' style={Props.style}>

      <div id="grid">

        {/* <h1>Header 1</h1>
        <h2>Header 2 (uppercase)</h2>
        <h3>Header 3</h3>
        <p>Paragraph</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit molestiae, labore quae ullam odit voluptatum cum expedita distinctio reprehenderit magni iusto, neque optio nam a sit perspiciatis totam numquam vel, veniam placeat?</p>
        <p><i>Italics</i></p>
        <p><i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic, nobis consectetur unde architecto libero, sit veritatis ipsa aperiam laudantium deserunt asperiores. Blanditiis natus fuga ipsa commodi, explicabo ea mollitia doloribus maiores.</i></p> */}

        { projects.map( (project, index) => {
          return (
            <Highlight key={index}>
              <Project 
                cursorText={project.cursorText}
                image={project.image}
                index={index}
                title={project.title}
                info={project.info}
                description={project.description}
                themeColor={'red'}
              />
            </Highlight>
        )})}
            
      </div>

    </div>
  );
}

export default Main;
