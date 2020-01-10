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
          <h3>Society of Design Administrators</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator</h3>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
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