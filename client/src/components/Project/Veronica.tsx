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
      
      <img 
        className={'img-fullscreen'}
        src={`${process.env.PUBLIC_URL}/images/vs/vs2.png`} 
        alt={''}  
      />

      <div className={'row'}>

        <div className={'col col-3'}>
          <h3>Logo Sketching</h3>
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
        <div className={'col col-20'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs3.png`} alt={''}/></div>
      </div>

      <div className={'row'}>

        <div className={'col col-10'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs4.png`} alt={''}/></div>

        <div className={'col col-3'}>
          <h3>Final Monogram &amp; Logo</h3>
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

        <div className={'col col-3'}>
          <p>
            When Veronica was launching her first EP, she came to me to create a gig poster for her big release shows in Nashville and Philledelphia.
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
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

        <div className={'col col-3'}>
          <p>
            Seizing the opportunity to shoot some portraits while I was in Nashville for Veronica's release show,
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
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

      <div className={'col col-3'}>
        <p>
          Partnering with the profoundly talented <a href="https://nathanpowelldesign.com/" target="blank">Nathan Powell</a> (co-producer and editor), I created the concept for, filmed and directed the final music video below.
        </p>
      </div>

      <div className={'col col-3'}>
        <p>
          The track from Veronica's EP, Wildflower talked a desire to be seen and loved, but the fear of as she puts it "dying in a vase". The footage was superimposed to a double exposure affect with beautiful results.
        </p>
      </div>

      <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/vs/vs10.png`} alt={''} style={{marginTop: '-75px'}}/></div>

      </div>

      <div className={'container'}>
      <iframe src="https://www.youtube.com/embed/ROb9MeEhzfU" frameBorder="0" className="video"></iframe>
      </div>

    </div>
    
  );
}

export default Localpost;