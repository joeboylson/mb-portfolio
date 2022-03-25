import React from 'react';

// grid
import Grid from '../Grid/Grid';

const photograpyItems = [
  { image: `${process.env.PUBLIC_URL}/images/photography/67108140_10157507845621202_9132086617261998080_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/168440557_10159685113296202_4649561477333849836_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/174414286_10159685673611202_558195404005015880_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/175710226_10159685113271202_1447448368633957655_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/191083614_10159685113326202_1543274413721416713_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/193283338_10159599491591202_8475695989743741255_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/200363244_10159685113336202_5601697629625958561_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/261337786_10159965647361202_4092920651829590712_n.jpeg` },
  { image: `${process.env.PUBLIC_URL}/images/photography/LF100418-6edit.JPG` },
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