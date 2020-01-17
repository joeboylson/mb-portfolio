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

        <div className={'col col-8 text-columns'}>
          <p>
            <a href="https://www.veronicastanton.com/" target="blank">Veronica Stanton</a> 
            is a folk musician out Music City, Nashville, TN. Through mutual friends we met and began 
            talking about the possibility of working togather. I love music and love using design as a way to be closer to it. 
            We talked abut gig posters, branding, music videos and photography. As my abilities encapsulate all of those things, 
            I was able to help her with them. What resulted was the creation of a brand, 
            both logos and brand expression through various mediums. I hope to work more with amazing artists like Veronica in the future.
          </p>
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

      <div className={'col col-6 text-columns'}>
        <p>
          In order to begin developing Veronica's brand, we pulled a bit of inspiration and curated it
          into visual groups. The final brand would end up reflecting elements from all three main groups.  
        </p>
      </div>

      </div>
      
      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/vs/vs2.png`} 
        alt={''}  
      />

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Logo Sketching</h3>
        </div>

        <div className={'col col-6 text-columns'}>
          <p>
            Sketching took me to a number of interesting places when trying to find the right mark for Veronica. 
            A lot of concepts were developed around her roots, both in her family and her roots style of music. 
            Others were inspired by her strong ties to her home in Pennsylvania and Nashville.  
          </p>
        </div>

      </div>
      <div className={'row'}>
        <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs3.png`} alt={''}/></div>
      </div>

      <div className={'row'}>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs4.png`} alt={''}/></div>

        <div className={'col col-3'}>
          <h3>Final Monogram &amp; Logo</h3>
        </div>

        <div className={'col col-6 text-columns'}>
          <p>
            In the end, the logo represented Veronica's love of heritage and her roots. A simplier monogram was also created so the brand could scale to different applications.
            The classic style of typography lent well to the idea of making a woodcut print, so I had the logo laser cut onto a wood for block printing.
          </p>
        </div>

      </div>

      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/vs/vs5.png`} 
        alt={''}
        style={{marginTop: '-200px'}}  
      />

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>EP Launch Show Posters &amp; T-Shirts</h3>
        </div>

        <div className={'col col-6 text-columns'}>
          <p>
            When Veronica was launching her first EP, she came to me to create a gig poster for her big release shows in Nashville and Philledelphia.
            Her album, 827 Miles, talked a lot of her journey to Nashville, the emotions of being so far from home, and her determination to move forward.
          </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-6'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs6.jpg`} alt={''}/></div>
        <div className={'col col-6'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs8.jpg`} alt={''}/></div>
        <div className={'col col-6'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs7.jpg`} alt={''}/></div>
        
      </div>

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Photography</h3>
        </div>

        <div className={'col col-6 text-columns'}>
          <p>
            Seizing the opportunity to shoot some portraits while I was in Nashville for Veronica's release show,
            we made a series of intimate portraits on 120mm film. We outlasted the heat and mosquitos but it paid off!
          </p>
        </div>

      </div>

        <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/vs/vs9.png`} 
        alt={''}  
        />

      <div className={'row'}>

      <div className={'col col-3'}>
        <h3>Music Video</h3>
      </div>

      <div className={'col col-6 text-columns'}>
        <p>
          Partnering with the profoundly talented <a href="https://nathanpowelldesign.com/" target="blank">Nathan Powell</a> (co-producer and editor), I created the concept for, filmed and directed the final music video below.
          The track from Veronica's EP, Wildflower talked a desire to be seen and loved, but the fear of as she puts it "dying in a vase". The footage was superimposed to a double exposure affect with beautiful results.
        </p>
      </div>

      <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs10.png`} alt={''}/></div>

      </div>

      <div className={'container'}>
        <iframe src="https://www.youtube.com/embed/ROb9MeEhzfU" frameBorder="0" className="video"></iframe>
      </div>

    </div>
    
  );
}

export default Localpost;