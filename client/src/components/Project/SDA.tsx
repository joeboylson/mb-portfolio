import React from 'react';

const Localpost: React.FC = () => {
  
  return (
    <div id={'sda'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>SDA, 2019</h1>
        </div>

        <div className={'col col-4'}>
          <h4>Project Type:</h4>
          <h3>Branding</h3>
          <h4>Client:</h4>
          <h3>Society for Design Administration</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator</h3>
        </div>

        <div className={'col col-4'}>
          <p>While at Intrinzic, I was able to lead a rebrand of a great organization called SDA. SDA is a members organization that offers certification, education and more for those working in administrative roles at architecture, engineering and construction (A/E/C) firms. When they approached us, they were going by The Society of Design Administration and wnated to shed the old image had through renaming and rebranding.</p>
        </div>

        <div className={'col col-4'}>
          <p>We suggested remaining close to their original by remaining SDA but only going as that. From there, we created a fresh young design system that would help move them into the 21st century and attract more young administrators into their membership.</p>
        </div>
      </div>

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/sda/sda1.png`} 
        alt={''}  
      />

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/sda/sda2.png`} 
        alt={''}  
      />

      <div className={'row'}>

        <div className={'col col-3'} style={{marginTop: '75px'}}>
          <h3>SDA Icon Language</h3>
        </div>

        <div className={'col col-3'} style={{marginTop: '75px'}}>
          <p>
            With a broad offering of services, from certifcation to professional education and beyond, it was
            </p>
        </div>

        <div className={'col col-3'} style={{marginTop: '75px'}}>
          <p>
          important to create an ownable icon language that could scale across all their applications.
          </p>
        </div>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/sda/sda3.png`} alt={''}/></div>

      </div>

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/sda/sda4.png`} 
        alt={''}  
      />

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Application Example</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            Within the scope of this project was an example of how the new brand elements could come to life in an application.
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            The use of photography, pattern, type and iconography creates a warm and inviting image of the new SDA.  
          </p>
        </div>

      </div>
      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/sda/sda5.gif`} 
        alt={''}  
      />

    </div>
    
  );
}

export default Localpost;