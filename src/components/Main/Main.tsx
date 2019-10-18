import React from 'react';
import './Main.css';

import Highlight from '../Highlight/Highlight'
import Project from '../Project/Project';

const projects = [
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  },
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  },
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  },
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  },
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  },
  {
    cursorText: '01',
    image: 'https://via.placeholder.com/1500x500',
    title: 'TITLE',
    info: 'Branding<br/>June 2019',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsum aut sint quis repellat sit exercitationem reprehenderit eos! Voluptatibus voluptatem exercitationem quia consequatur eveniet, numquam deleniti totam incidunt, aliquid temporibus nihil ipsum.'
  }
]

const Main: React.FC = () => {
  return (
    <div id='main'>

      <div id="grid">

        { projects.map( (project, index) => {
          return (
            <Highlight key={index}>
              <Project 
                cursorText={project.cursorText}
                image={project.image}
                index={index}
              />
            </Highlight>
        )})}
            
      </div>

    </div>
  );
}

export default Main;
