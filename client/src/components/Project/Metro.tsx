import React from 'react';

const Metro: React.FC = () => {
  
  return (
    <div id={'metro'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>Cincinnati Metro, 2016</h1>
        </div>

        <div className={'col col-4'}>
          <h4>Project Type:</h4>
          <h3>Branding</h3>
          <h4>Client:</h4>
          <h3> Student Work</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator, Photoshop, After Effects</h3>
        </div>

        <div className={'col col-4'}>
          <p>In a three month long project with <a href="http://www.lillianclifton.com/" target="blank">Lillian Clifton,</a> <a href="http://alyssagardner.com/index.html" target="blank">Alyssa Gardner</a> and <a href="https://www.emilyhofmeyer.co/" target="blank">Emily Hofmeyer,</a> we were faced with the challenge of increasing ridership on the Cincinnati Metro. We planned to accomplish this by</p>
        </div>

        <div className={'col col-4'}>
          <p>improving processes of the Metro. With the proposed changes in processes, a proposed rebrand was very important. That was my focus on the project. Below is the result of the rebrand I managed.</p>
        </div>
      </div>

      <img 
        src={`${process.env.PUBLIC_URL}/images/metro/metro1.png`} 
        alt={''}
        className={'img-fullscreen-mobile'}
      />

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/metro/metro2.png`} 
        alt={''}
        style={{marginBottom: '-200px'}}  
      />

        <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Bus Schedule</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            Overhauling the existing schedule and map was essential to making ridership simpler for people.
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            The two core colors are used to seperate inbound vs outbound busses, and this treatment follows on to the signage.  
          </p>
        </div>

        </div>
        <div className={'row'}>
        <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/metro/metro3.png`} alt={''} style={{marginTop: '-100px'}}/></div>
        </div>
        <img 
          className={'img-fullscreen'}
          src={`${process.env.PUBLIC_URL}/images/metro/metro4.png`} 
          alt={''}
          style={{marginBottom: '-200px', marginTop: '200px'}}  
        />
      <div className={'row'}>

        <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/metro/metro5.png`} alt={''}/></div>

        <div className={'col col-3'} style={{marginTop: '200px'}}>
          <h3>Bus Stop Signs</h3>
        </div>

        <div className={'col col-3'} style={{marginTop: '200px'}}>
          <p>
            As stated above, the inbound and outbound routes are differentiated on the schedule and in the

 
            </p>
        </div>

        <div className={'col col-3'} style={{marginTop: '200px'}}>
          <p>
          environment, using the blue and red – the two primary Metro brand colors.
          </p>
        </div>

      </div>

      <div id={'video-wrapper'}>
        <iframe src="https://player.vimeo.com/video/383131613?api=1" title={'metro-video'}></iframe>
      </div>


      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Bus Graphics</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            A great expression of the pattern we created was on the wraps on the bus.
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            This familiar graphic asset helps reinforce the new brand and it's new processes.
          </p>
        </div>

      <img 
          className={'img-fullscreen'}
          src={`${process.env.PUBLIC_URL}/images/metro/metro6.png`} 
          alt={''}
          style={{marginBottom: '-200px', marginTop: '200px'}}  
        />

      </div>

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Onboard Digital Signage</h3>
        </div>

        <div className={'col col-3'}>
          <p>
            While the rider is on the bus, a companion to the bus stop signs and the map helps guide them to their stop.
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            This screen informs the rider what stops are upcoming, what busses stop there, and what things there are to see around it.
          </p>
        </div>

        <div id={'video-wrapper'}>
          <iframe src="https://player.vimeo.com/video/383624951?api=1" title={'metro-video'} style={{marginTop: '100px'}}></iframe>
        </div>

      </div>

    </div>
  );
}

export default Metro;