import React from 'react';

// grid
import Grid from '../Grid/Grid';

/*
ARGS:
- image: the url of the image
- moveHorizontal/moveVertical: offset of the image within the grid preview 
*/

const illustrationItems = [
  { image: `${process.env.PUBLIC_URL}/images/illustration/15BD7CC0-2640-4F13-BF43-E07A3CD08E74.JPG`, moveHorizontal: -90 },
  { image: `${process.env.PUBLIC_URL}/images/illustration/90reds_1.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/90reds_2.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/90reds_3.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/90reds_4.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/300E2AF7-3B42-489F-A860-4E6F8ECD56C2.JPG`, moveHorizontal: -50 },
  { image: `${process.env.PUBLIC_URL}/images/illustration/777FECA6-894C-43EF-91AB-BC592695CAEC.JPG`, moveHorizontal: -30},
  { image: `${process.env.PUBLIC_URL}/images/illustration/271356205_1040485540015810_4382185712539763188_n.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/ChasingChaseMockupE.png`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/FF321A55-FFAA-4061-8619-B9633B2E5F0E.JPG`, moveHorizontal: -50},
  { image: `${process.env.PUBLIC_URL}/images/illustration/IMG_0611.JPG`, moveVertical: -30},
  { image: `${process.env.PUBLIC_URL}/images/illustration/IMG_0612.JPG`, moveVertical: -70},
  { image: `${process.env.PUBLIC_URL}/images/illustration/JoeyFranchiseMockup.jpg`, moveHorizontal: -60},
  { image: `${process.env.PUBLIC_URL}/images/illustration/KingOfTheJungleMockupE.jpg`, moveHorizontal: -40},
  { image: `${process.env.PUBLIC_URL}/images/illustration/marlboro.png`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/viewfinder.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/neilArmstong1.jpeg`, moveHorizontal: -50},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration1.jpg`, moveVertical: -100},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration2.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration3.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration6.jpg` },
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration7.jpg`, moveVertical: -75},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration8.jpg` },
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration9.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration10.jpg`, moveVertical: -75}
]

console.log({illustrationItems})

const Illustration: React.FC = () => {
  return (
    <div id={'illustration'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>ILLUSTRATION</h1>
        </div>

        <div className={'col col-12'}>
          <p>Over the years I have had opportunities to refine my illustrative abilities. Many were personal projects, and some were commissioned works. I hope to continue to refine and develop my skills and include more physical mediums to stretch my toolkit.</p>
        </div>

      </div>

      <Grid items={illustrationItems} />

    </div>
  );
}

export default Illustration;