import React from 'react';


const About: React.FC = () => {

  const getAnimationDelay = (number:number) => {
    return {animationDelay: `${number/10}s`} as React.CSSProperties;
  }

  return (
    <div id='about'>

      <div className={'row fadeUp'} style={getAnimationDelay(1)}>

        <div className={'col col-6'}>
          <h1>Graphic Designer</h1>
          <h1>Illustrator</h1>
          <h1>Motion Designer</h1>
          <h1>UI/UX Designer</h1>
          <h1>Photographer</h1>
        </div>

        <div className={'col col-4'}>
          <p>
            My name is Matt and I am a creator.
            While my formal training is in Graphic Design (at the University of Cincinnati),
            my interests and profficiencies extend far beyond that of traditional design.
            I like to be very good at a couple of things and pretty good at a lot of things
          </p>
          <p>
            My other capabilities are mostly complimentary to branding and design,
            and lend themselves well to that world, but are strong enough to hold on their own.
          </p>
        </div>

        <div id={'image'} className={'col col-8'}>
          <img src="https://via.placeholder.com/1500x1500" alt="" />
          <label htmlFor="image">
            If you don't want to look at my face, <span className={'fake-link'}>
              <strong>click here</strong>
            </span> to change the
            photo to a <strong>very believable</strong> photo-manipulation that will replace
            my face with someone who has a nicer face than me. Note, I cannot do this trick
            in real life. Just on the internet.
          </label>
        </div>
      </div>

      <div className={'row fadeUp'} style={getAnimationDelay(2)}>
        <div className={'col col-16'}>
          <h1>
            You may be considering to spend 8+ hours a day with me, so you better like me.
            Here's some things I like, some things I dislike, some things I've done,
            and some things I'd like to do.
          </h1>
        </div>
      </div>

      <div id={'list'} className={'row'}>

        <div className={'col col-4'}>
          <h1 className={'text-right'}>Likes</h1>
        </div>
        <div className={'col col-3'}>
          <ol>
            <li>Film Photography</li>
            <li>Vintage Japanese Motorcycles</li>
            <li>Video Games</li>
            <li>The world of the Fallout game series</li>
            <li>Speling</li>
            <li>Pretending to be a cowboy in Red Dead Redemption 2</li>
            <li>Hiking</li>
            <li>Roadtripping</li>
            <li>Being hurt by the Cincinnati Bengals</li>
            <li>Milksteak</li>
          </ol>
        </div>

        <div className={'col col-4'}>
          <h1 className={'text-right'}>Dislikes</h1>
        </div>
        <div className={'col col-3'}>
          <ol>
            <li>
              People who turn their car in the opposite direction of the way they to turn, shortly
              before turning
            </li>
            <li>People I don't like</li>
            <li>Waiting for a package</li>
            <li>Communicating long thoughts over text message</li>
            <li>Ghouls</li>
          </ol>
        </div>

      </div>

      <div id={'list'} className={'row'} style={getAnimationDelay(3)}>

        <div className={'col col-4'}>
          <h1 className={'text-right'}>Things I've Done</h1>
        </div>
        <div className={'col col-3'}>
          <ol>
            <li>Visited 30 U.S. States</li>
            <li>Been featured on the front page of Reddit</li>
            <li>Built two motorcycles</li>
            <li>Owned 20 motorcycles</li>
            <li>Rode a bicycle 52 miles once</li>
            <li>Been pronouced dead (ask me about that!)</li>
          </ol>
        </div>

        <div className={'col col-4'}>
          <h1 className={'text-right'}>Things I'd Like to Do</h1>
        </div>
        <div className={'col col-3'}>
          <ol>
            <li>Meet Clint Eastwood</li>
            <li>Skydive</li>
            <li>Visit all 50 States</li>
            <li>Visit every National Park</li>
            <li>Have space pizza with Elon Musk</li>
            <li>Become proficient at woodcut and linoleum printing</li>
            <li>Teach part-time at my alma-mater (DAAP)</li>
            <li>
              Take pictures of my child every day for 18 years so I can create an awesome
              timelapse of a human being growing to adulthood
            </li>
            <li>Have a child</li>
            <li>Produce a script for an original feature length film</li>
          </ol>
        </div>

      </div>

      <div className={'row'} style={getAnimationDelay(4)}>
        <div className={'col col-4'}>
          <p>
            Throughout my college career, I was fortunate enough to have 5 semester (two full years)
            of full-time coop work. This experience prepared me greatly for the workplace when I
            emerged into the design world. Here's is where I've worked.
          </p>
        </div>
        <div className={'col-8'}>
          <div id={'edu-exp'}>
            <h1>Education / Experience</h1>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>Associates in Graphic Design</p>
                <p className={'collapse-2'}>May 2013</p>
                <p className={'collapse-1'}>3.4 GPA</p>
              </div>
            </div>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>Design Intern</p>
                <p className={'collapse-2'}>January 2015 - May 2015</p>
                <p className={'collapse-1'}>August 2015 - January 2016</p>
              </div>
            </div>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>Design Intern Folger's Team</p>
                <p className={'collapse-2'}>May 2016 - August 2016</p>
                <p className={'collapse-1'}>January 2017 - May 2017</p>
              </div>
            </div>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>Design Intern, NERF Team ?</p>
                <p className={'collapse-2'}>August 2017 - January 2018</p>
              </div>
            </div>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>BA in Communication Design</p>
                <p className={'collapse-2'}>April 2018</p>
                <p className={'collapse-1'}>3.7 GPA</p>
              </div>
            </div>

            <div className={'item'}>
              <div>
                <img src="https://via.placeholder.com/1500x500" alt="https://via.placeholder.com/1500x500" />
              </div>
              <div>
                <p>Graphic Designer ?</p>
                <p className={'collapse-2'}>June 2019 - Current</p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default About;