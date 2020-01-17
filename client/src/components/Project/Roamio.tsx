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

        <div className={'col col-8 text-columns roamioParagraph1'}>
          <p>
            Roamio is a travel planning and collaboration app I designed for my senior capstone at the University of Cincinnati's College of Design. I am continually working on Roamio and meeting with developers and investors. I created Roamio because I am obsessed with two things – travel and improving things.
            In this case I'm improving a process which is in dire need of design intervention. Through my own frustrations in travel planning, my survey results and various interviews, I've identified places within the travel planning process to intervene.
          </p>
        </div>
      </div>

      <img 
        className={'img-fullscreen roamio1'}
        src={`${process.env.PUBLIC_URL}/images/roamio/roamio1.png`} 
        alt={''}
        style={{marginTop: '-25px'}}  
      />

      <div className={'row'}>

        <div className={'col col-10'}><img className={'img-fullscreen-mobile img-fullscreen-tablet roamio2'} src={`${process.env.PUBLIC_URL}/images/roamio/roamio2.gif`} alt={''}/></div>

        <div className={'col col-3 roamioParagraph2'}>
          <h3>Interviews &amp; Surveys</h3>
        </div>

        <div className={'col col-6 text-columns roamioParagraph3'}>
          <p>
            After determining the subject of the app, I began interviewing individuals and collecting survey results.
            These experiences were incredibly insightful and directed much of the trajectory of Roamio.
          </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-3 roamioParagraph4'}>
          <h3>Personas &amp; Journey Mapping</h3>
        </div>

        <div className={'col col-6 text-columns roamioParagraph5'}>
          <p>
            The result of the interviews and surveys was the creation of three unique personas. Each decision made from here would be with these three – the synthesis of my research, in consideration.
            Using these personas, I created a series of user journey maps, both current and ideal states. Identifying each step of the user journey and what is working and what isn't was essential to determining the scope of Roamio. 
          </p>
        </div>

        <div className={'col col-10'}><img className={'img-fullscreen-mobile img-fullscreen-tablet roamio3'} src={`${process.env.PUBLIC_URL}/images/roamio/roamio3.png`} alt={''}/></div>

      </div>

      <div className={'row'}>
        <div className={'col col-20'}><img className={'img-fullscreen-mobile img-fullscreen-tablet roamio4'} src={`${process.env.PUBLIC_URL}/images/roamio/roamio4.png`} alt={''} style={{marginTop: '-75px'}}/></div>
      </div>

      <div className={'row'}>

        <div className={'col col-10'}><img className={'img-fullscreen-mobile img-fullscreen-tablet roamio5'} src={`${process.env.PUBLIC_URL}/images/roamio/roamio5.png`} alt={''}/></div>

        <div className={'col col-3 roamioParagraph6'}>
          <h3>Wireframe Sketching &amp; Rapid Prototyping</h3>
        </div>

        <div className={'col col-6 text-columns roamioParagraph7'}>
          <p>
            The next step was to begin designing some of the functions I decided were essential for the app. A great deal of hand sketching wireframes,
            rapid prototyping and user testing with paper prototypes revealed tons of opportunities for the design.
          </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-3 roamioParagraph8'}>
          <h3>Digital Prototyping</h3>
        </div>

        <div className={'col col-6 text-columns roamioParagraph9'}>
          <p>
            A full list of functions needed and the ideal user process in hand, I began protoyping digitally. This was done firstly as a low fidelity prototype in Adobe XD, and then later as a high fidelity protoype with
            full animation style and interaction in Principle. The final prototype would operate the whole process of planning a trip with friends in one scenerio. See the video for the full user experience. 
          </p>
        </div>

        <div className={'col col-20'}><img className={'img-fullscreen-mobile img-fullscreen-tablet roamio6'} src={`${process.env.PUBLIC_URL}/images/roamio/roamio6.gif`} alt={''} style={{marginTop: '100px'}}/></div>

      </div>

      <div className={'video-wrapper roamioVideo1'}>
        <iframe src="https://player.vimeo.com/video/384099008?api=1" title={'metro-video'}></iframe>
      </div>

      <div className={'row'}>

        <div className={'col col-20 roamio7'}><img src={`${process.env.PUBLIC_URL}/images/roamio/roamio7.png`} alt={''} style={{marginTop: '100px'}}/></div>
        <div className={'col col-20 roamio8'}><img src={`${process.env.PUBLIC_URL}/images/roamio/roamio8.png`} alt={''}/></div>

      </div>

    </div>
    
  );
}

export default Localpost;