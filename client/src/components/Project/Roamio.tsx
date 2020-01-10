import React from 'react';

const Localpost: React.FC = () => {
  
  return (
    <div id={'roamio'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>Roamio, 2020</h1>
        </div>

        <div className={'col col-4'}>
          <h4>Project Type:</h4>
          <h3>UX Design, Motion Design, Branding</h3>
          <h4>Client:</h4>
          <h3>Personal Project</h3>
          <h4>Tools Used:</h4>
          <h3>Sketch, Adobe XD, Principle, Illustrator, After Effects</h3>
        </div>

        <div className={'col col-4'}>
          <p>Roamio is a travel planning and collaboration app I designed for my senior capstone at the University of Cincinnati's College of Design. I am continually working on Roamio and meeting with developers and investors. I created Roamio because I am obsessed with two things – travel and improving things.</p>
        </div>

        <div className={'col col-4'}>
          <p>In this case I'm improving a process which is in dire need of design intervention. Through my own frustrations in travel planning, my survey results and various interviews, I've identified places within the travel planning process to intervene.</p>
        </div>
      </div>

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/roamio/roamio1.png`} 
        alt={''}
        style={{marginTop: '-25px'}}  
      />

      <div className={'row'}>

      <div className={'col col-3'}>
        <h3>Menu</h3>
      </div>

      <div className={'col col-3'}>
        <p>
          Essential to a restaurant and bar with such diverse and interesting offerings, the menu we created
        </p>
      </div>

      <div className={'col col-3'}>
        <p>
          clearly and simply displays the delicious items availble, leveraging the brand in effective ways.  
        </p>
      </div>

      </div>
      <div className={'row'}>
      <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/menu.png`} alt={''} style={{marginTop: '-100px'}}/></div>
      </div>

      {/* <div>
        <canvas ref={overviewCanvasRef} id={'overview-canvas'}></canvas>
        <div style={{height: `${window.innerHeight*3}px`}}></div>
      </div> */}

      {/* COASTERS */}

      <div className={'row'}>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/coasters.png`} alt={''}/></div>

        {/* <div className={'col col-8'}>
          <canvas ref={coasterCanvasRef} id={'coaster-canvas'}></canvas>
          <div style={{height: `640px`}}></div>
        </div> */}

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