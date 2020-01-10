import React from 'react';

const Localpost: React.FC = () => {
  
  return (
    <div id={'veronica'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>Veronica Stanton, 2019</h1>
        </div>

        <div className={'col col-4'}>
          <h4>Project Type:</h4>
          <h3>Photography, Illustration and Videography</h3>
          <h4>Client:</h4>
          <h3>Veronica Stanton</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator, Photoshop, After Effects</h3>
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
        src={`${process.env.PUBLIC_URL}/images/vs/vs1.png`} 
        alt={''}  
      />

      <div className={'row'}>

      <div className={'col col-3'}>
        <h3>Brand Development</h3>
      </div>

      <div className={'col col-3'}>
        <p>
          In order to begin developing Veronica's brand, we pulled a bit of inspiration and curated it
        </p>
      </div>

      <div className={'col col-3'}>
        <p>
          into visual groups. The final brand would end up reflecting elements from all three main groups.  
        </p>
      </div>

      </div>
      <div className={'row'}>
      <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/menu.png`} alt={''} style={{marginTop: '-100px'}}/></div>
      </div>


      <div className={'row'}>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/coasters.png`} alt={''}/></div>

        <div className={'col col-3'}>
          <h3>Coasters</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            As much as its a restaurant, it's a bar.
            So obviously, we needed to develop some coasters.
            </p>
        </div>

        <div className={'col col-3'}>
          <p>
            Another cheap takeaway for customers, these coasters serve a dual purpose.
          </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Post Cards</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            One of the activation strategies we created was a series of Local Post post cards.
            These takeaways are organic marketing materials that customers
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            of Local Post can mail to their friends and family. They can simply leave it and the Local
            Post staff will mail it.  
          </p>
        </div>

      </div>
      <div className={'row'}>
        <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/postcard.png`} alt={''}/></div>
      </div>

      <div className={'row'}>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/byop.png`} alt={''}/></div>

        <div className={'col col-3'}>
          <h3>Build Your Own Pizza Worksheet</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            With a "build your own" pizza offering the highest profit margin to the restaurant, we wanted
            </p>
        </div>

        <div className={'col col-3'}>
          <p>
            to make that experience more interactive and fun to encourage customers to order this way.
          </p>
        </div>

        </div>

    </div>
    
  );
}

export default Localpost;