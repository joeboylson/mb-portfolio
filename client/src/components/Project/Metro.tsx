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
          <h3>Student Work</h3>
          <h4>Tools Used:</h4>
          <h3>Illustrator, Photoshop, After Effects</h3>
        </div>

        <div className={'col col-8 text-columns metroParagraph1'}>
          <p>
            In a three month long project with <a href="http://www.lillianclifton.com/" target="blank">Lillian Clifton,</a>&nbsp; 
            <a href="http://alyssagardner.com/index.html" target="blank">Alyssa Gardner</a> and&nbsp; 
            <a href="https://www.emilyhofmeyer.co/" target="blank">Emily Hofmeyer,</a>&nbsp; 
            we were faced with the challenge of increasing ridership on the Cincinnati Metro. 
            We planned to accomplish this by improving processes of the Metro. With the proposed changes in processes, 
            a proposed rebrand was very important. That was my focus on the project. Below is the result of the rebrand I managed.
          </p>
        </div>
      </div>

      <img 
        src={`${process.env.PUBLIC_URL}/images/metro/metro1.png`} 
        alt={''}
        className={'img-fullscreen-mobile img-fullscreen-tablet metro1'}
      />

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/metro/metro2.png`} 
        alt={''}
        style={{marginBottom: '-200px'}}  
      />

        <div className={'row'}>

        <div className={'col col-3 metroParagraph2'}>
          <h3>Bus Schedule</h3>
        </div>

        <div className={'col col-6 text-columns metroParagraph3'}>
          <p>
            Overhauling the existing schedule and map was essential to making ridership simpler for people.
            The two core colors are used to seperate inbound vs outbound busses, and this treatment follows on to the signage.  
          </p>
        </div>

        </div>
        <div className={'row'}>
        <div className={'col col-20'}><img className={'img-fullscreen-mobile img-fullscreen-tablet metro2'} src={`${process.env.PUBLIC_URL}/images/metro/metro3.png`} alt={''} style={{marginTop: '-100px'}}/></div>
        </div>
        <img 
          className={'img-fullscreen metro3'}
          src={`${process.env.PUBLIC_URL}/images/metro/metro4.png`} 
          alt={''}
          style={{marginBottom: '-200px', marginTop: '200px'}}  
        />
      <div className={'row'}>

        <div className={'col col-8'}><img className={'img-fullscreen-mobile img-fullscreen-tablet metro4'} src={`${process.env.PUBLIC_URL}/images/metro/metro5.png`} alt={''}/></div>

        <div className={'col col-3 metroParagraph4'} style={{marginTop: '200px'}}>
          <h3>Bus Stop Signs</h3>
        </div>

        <div className={'col col-6 text-columns metroParagraph5'} style={{marginTop: '200px'}}>
          <p>
            As stated above, the inbound and outbound routes are differentiated on the schedule and in the
            environment, using the blue and red – the two primary Metro brand colors.
          </p>
        </div>

      </div>

      <div className={'video-wrapper metroVideo1'}>
        <iframe src="https://player.vimeo.com/video/383131613?api=1" title={'metro-video'}></iframe>
      </div>


      <div className={'row'}>

        <div className={'col col-3 metroParagraph6'}>
          <h3>Bus Graphics</h3>
        </div>

        <div className={'col col-6 text-columns metroParagraph7'}>
          <p>
            A great expression of the pattern we created was on the wraps on the bus.
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

        <div className={'col col-6 text-columns metroParagraph7'}>
          <p>
            While the rider is on the bus, a companion to the bus stop signs and the map helps guide them to their stop.
            This screen informs the rider what stops are upcoming, what busses stop there, and what things there are to see around it.
          </p>
        </div>

        <div className={'video-wrapper'}>
          <iframe src="https://player.vimeo.com/video/383624951?api=1" title={'metro-video'} style={{marginTop: '100px'}}></iframe>
        </div>

      </div>

    </div>
  );
}

export default Metro;