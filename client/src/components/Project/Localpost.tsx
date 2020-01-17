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

        <div className={'col col-8 text-columns lpParagraph1'}>
          <p>
            A proposed rebrand for a local restaurant (that is located in an old post office), 
            my work for Local Post hoped to refresh and rejuvinate a brand when it was changing its name in 2018. 
            While the management didn't end up coming to an agreement on the brand, I decided to finish it as a portfolio piece. 
            The brand was inspired by historic postal service photos and a diluge of resources found on LOC.gov. 
            Utilizing this free public domain resource, I developed a beautiful graphic language system that easily adapted to all brand expressions. 
            The postal-themed brand is easily recognizable and understatedly nostalgic.
          </p>
        </div>
      </div>

      <img 
        className={'img-fullscreen localpost1'}
        src={`${process.env.PUBLIC_URL}/images/LocalPost/lp2.png`} 
        alt={''}  
      />

      <div className={'row'}>

      <div className={'col col-3'}>
        <h3>Menu</h3>
      </div>

      <div className={'col col-6 text-columns lpParagraph2'}>
        <p>
          Essential to a restaurant and bar with such diverse and interesting offerings, 
          the menu we created clearly and simply displays the delicious items availble, 
          leveraging the brand in effective ways.  
        </p>
      </div>

      </div>
      <div className={'row'}>
      <div className={'col col-20'}><img className="localpost2" src={`${process.env.PUBLIC_URL}/images/LocalPost/menu.png`} alt={''} style={{marginTop: '-100px'}}/></div>
      </div>

      {/* <div>
        <canvas ref={overviewCanvasRef} id={'overview-canvas'}></canvas>
        <div style={{height: `${window.innerHeight*3}px`}}></div>
      </div> */}

      {/* COASTERS */}

      <div className={'row'}>

        <div className={'col col-10'}><img className={'img-fullscreen-mobile img-fullscreen-tablet localpost3'} src={`${process.env.PUBLIC_URL}/images/LocalPost/coasters.png`} alt={''}/></div>

        {/* <div className={'col col-8'}>
          <canvas ref={coasterCanvasRef} id={'coaster-canvas'}></canvas>
          <div style={{height: `640px`}}></div>
        </div> */}

        <div className={'col col-3 lpParagraph3'}>
          <h3>Coasters</h3>
        </div>

        <div className={'col col-6 text-columns lpParagraph4'}>
          <p>
            As much as its a restaurant, it's a bar.
            So obviously, we needed to develop some coasters.
            Another cheap takeaway for customers, these coasters serve a dual purpose.
          </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-6 lpParagraph5'}>
          <h3>Post Cards</h3>
        </div>

        <div className={'col col-6 text-columns lpParagraph6'}>
          <p>
            One of the activation strategies we created was a series of Local Post post cards.
            These takeaways are organic marketing materials that customers of Local Post can mail 
            to their friends and family. They can simply leave it and the Local Post staff will mail it.  
          </p>
        </div>

      </div>
      <div className={'row'}>
        <div className={'col col-20'}><img className={'localpost4'} src={`${process.env.PUBLIC_URL}/images/LocalPost/postcard.png`} alt={''}/></div>
      </div>

      <div className={'row'}>

        <div className={'col col-10'}><img className={'img-fullscreen-mobile img-fullscreen-tablet localpost3'} src={`${process.env.PUBLIC_URL}/images/LocalPost/byop.png`} alt={''}/></div>

        <div className={'col col-3 lpParagraph7'} style={{marginTop: '150px'}}>
          <h3>Build Your Own Pizza Worksheet</h3>
        </div>

        <div className={'col col-6 text-columns lpParagraph8'} style={{marginTop: '150px'}}>
          <p>
            With a "build your own" pizza offering the highest profit margin to the restaurant, 
            we wanted to make that experience more interactive and fun to encourage customers to order this way.
          </p>
        </div>

        </div>

        {/* <div className={'row'} style={{marginTop: '200px'}}>
          <div className={'col col-10'}>
            <h2>&lt; &emsp; Motion Design</h2>
          </div>
          <div className={'col col-10'} style={{textAlign: "right"}}>
            <h2>Cincinnati Metro &emsp; &gt;</h2>
          </div>
        </div> */}

    </div>
    
  );
}

export default Localpost;