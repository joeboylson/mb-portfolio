import React from 'react';

// grid
import Grid from '../Grid/Grid';

const illustrationItems = [
  { image: `${process.env.PUBLIC_URL}/images/illustration/neilArmstong1.jpeg`},
  { image: `${process.env.PUBLIC_URL}/images/illustration/illustration1.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`}
]

const Illustration: React.FC = () => {
  return (
    <div id={'illustration'}>

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>ILLUSTRATION</h1>
        </div>

        <div className={'col col-12'}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, molestias sed? Minima iusto inventore labore eveniet? A suscipit amet repudiandae veniam! Culpa voluptatem vero eum reprehenderit saepe. Commodi, animi iusto? Atque, nihil.</p>
        </div>

      </div>

      <Grid items={illustrationItems} />

    </div>
  );
}

export default Illustration;