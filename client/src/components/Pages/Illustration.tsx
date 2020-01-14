import React from 'react';

// grid
import Grid from '../Grid/Grid';

/*
ARGS:
- image: the url of the image
- cropOffset: vertical offset of the image within the grid preview 
*/
const illustrationItems = [
  { image: `${process.env.PUBLIC_URL}/images/illustration/neilArmstong1.jpeg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration1.jpg`, cropOffset: -100},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration2.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration3.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration6.jpg` },
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration7.jpg`, cropOffset: -75},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration8.jpg` },
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration9.jpg` },
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration10.jpg`, cropOffset: -75}
]

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