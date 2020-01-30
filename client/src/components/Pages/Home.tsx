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
    description: 'In a three month long project with Lillian Clifton, Alyssa Gardner and Emily Hofmeyer, we were faced with the challenge of increasing ridership on the Cincinnati Metro.',
    themeColor: '#B6BCBF'
  },
  {
    route: 'veronica',
    cursorText: '03',
    image: `${process.env.PUBLIC_URL}/images/home/vs.png`,
    title: 'Veronica Stanton',
    description: 'Veronica, an incredible artist out of Nashville, came to me for help developing her brand. We created an identity, photography, a music video, a gig poster and more.',
    info: <span>Branding, Photography, Illustration and Videography<br/>August 2019</span>,
    themeColor: '#f0ddd1' 
  },
  {
    route: 'sda',
    cursorText: '04',
    image: `${process.env.PUBLIC_URL}/images/home/sda.png`,
    title: 'SDA',
    info: <span>Branding<br/>February 2019</span>,
    description: 'SDA is a member organization who supports those in administrative roles at design and architecture firms. They needed a visual overhaul of their brand.',
    themeColor: '#407EC9' 
  },
  {
    route: 'roamio',
    cursorText: '05',
    image: `${process.env.PUBLIC_URL}/images/home/roamio.png`,
    title: 'Roamio',
    info: <span>UX Design<br/>Continuous</span>,
    description: 'What began as a senior capstone in college is now my personal obsession. I continue to develop it and work to have it made available to the public.',
    themeColor: '#E52354' 
  },
  {
    route: 'motion',
    cursorText: '06',
    image: `${process.env.PUBLIC_URL}/images/home/motion.gif`,
    title: 'Kinetic Reel',
    info: <span>Motion Design<br/>Continuous</span>,
    description: 'If a photo is worth a thousand words, what is a video worth? I have had a great deal of experience working on motion design projects.',
    themeColor: '#0a506a' 
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