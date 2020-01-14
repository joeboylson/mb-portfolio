import React from 'react';

// grid
import Grid from '../Grid/Grid';

const photograpyItems = [
  { image: `${process.env.PUBLIC_URL}/images/photography/photography1.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography2.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography3.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography4.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography5.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography6.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography7.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography8.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography9.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography10.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography11.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography12.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography13.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography14.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography15.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography16.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography17.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography18.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography19.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography20.jpg`},
  { image: `${process.env.PUBLIC_URL}/images/photography/photography21.jpg`}
]

const Photography: React.FC = () => {
  return (
    <div id={'photography'}>

      <div className={'row fadeUp'}>

        <div className={'col col-4'}>
          <h1>PHOTOGRAPHY</h1>
        </div>

        <div className={'col col-12'}>
          <p>Photography is a huge personal passion of mine. I shoot primarily on 4x5, 120mm and 35mm film cameras, but also shoot plenty of digital photos as well. The aspects of composition, light, color, etc. translate easily over from my other creative abilities.</p>
        </div>

      </div>

      <Grid items={photograpyItems} />

    </div>
  );
}

export default Photography;