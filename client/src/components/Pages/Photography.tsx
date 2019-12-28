import React from 'react';

// grid
import Grid from '../Grid/Grid';

const photograpyItems = [
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`},
  { image: `${process.env.PUBLIC_URL}/images/about/aboutPortrait.png`}
]

const Photography: React.FC = () => {
  return (
    <div id={'photography'}>

      <div className={'row fadeUp'}>

        <div className={'col col-4'}>
          <h1>Photography</h1>
        </div>

        <div className={'col col-12'}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, molestias sed? Minima iusto inventore labore eveniet? A suscipit amet repudiandae veniam! Culpa voluptatem vero eum reprehenderit saepe. Commodi, animi iusto? Atque, nihil.</p>
        </div>

      </div>

      <Grid items={photograpyItems} />

    </div>
  );
}

export default Photography;