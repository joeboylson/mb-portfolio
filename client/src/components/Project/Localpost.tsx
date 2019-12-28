import React from 'react';

const Localpost: React.FC = () => {
  
  return (
    <div id={'localpost'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>Local Post, 2018</h1>
        </div>

        <div className={'col col-4'}>
          <h4>Project Type:</h4>
          <h3>Branding</h3>
          <h4>Client:</h4>
          <h3>Local Post</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator, Photoshop, Cinema 4D</h3>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
        </div>
      </div>

      <img src={`${process.env.PUBLIC_URL}/images/LocalPost/lp1.png`} alt={''}/>

      {/* <div>
        <canvas ref={overviewCanvasRef} id={'overview-canvas'}></canvas>
        <div style={{height: `${window.innerHeight*3}px`}}></div>
      </div> */}

      {/* COASTERS */}

      <div className={'row'}>

        <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/palace1.jpg`} alt={''}/></div>

        {/* <div className={'col col-8'}>
          <canvas ref={coasterCanvasRef} id={'coaster-canvas'}></canvas>
          <div style={{height: `640px`}}></div>
        </div> */}

        <div className={'col col-3'}>
          <h2>Coasters</h2>
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
          <h2>Post Cards</h2>
        </div>

        <div className={'col col-3'}>
          <p>
            One of the activation strategies  we created was a series od Local Post post cards.
            These takeaways are prganic marketing materials that customers
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            of Localpost can mail to their friends and family. They can simply leave it and the Local
            Post staff will mail it.  
          </p>
        </div>
        <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/palace2.jpg`} alt={''}/></div>

      </div>

    </div>
  );
}

export default Localpost;