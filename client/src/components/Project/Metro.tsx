import React from 'react';

// utils
import { loadImages } from '../utils/loadImages.js'
import { OverviewCanvas, CoasterCanvas } from '../utils/canvas.js'

const Metro: React.FC = () => {

  let [loading, setLoading] = React.useState(true)
  let overviewCanvasRef:any = React.useRef(null);
  let coasterCanvasRef:any = React.useRef(null);

  React.useEffect(() => {
    // let [loadedCoasterImages, loadedOverviewImages] = loadImages()
    // new OverviewCanvas(overviewCanvasRef.current, loadedOverviewImages);
    // new CoasterCanvas(coasterCanvasRef.current, loadedCoasterImages);
    setLoading(false)
  }, [])
  
  return (
    <div id={'metro'}>

      { loading &&
        <div id={'localpost-loading-page'}>
          <h3>Loading images . . .</h3>
        </div>
      }

      <div className={'row'}>

        <div className={'col col-4'}>
          <h1>Local Post, 2018</h1>
        </div>

        <div className={'col col-4'}>
          <h3>Project Type: Branding</h3>
          <h3>Client: Local Post</h3>
          <h3>Tools Used: Illustrator, Photoshop, Cinema 4D</h3>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
        </div>

        <div className={'col col-4'}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a deserunt, earum debitis, obcaecati rerum quia culpa molestias necessitatibus sequi corrupti magnam quidem? Odit non deleniti necessitatibus ea consequatur, quia est pariatur, quaerat quasi vero aliquam excepturi, delectus harum doloremque placeat blanditiis! Officia a nulla dolores earum ad quod adipisci!</p>
        </div>
      </div>

      <img src={`${process.env.PUBLIC_URL}/images/LocalPost/DSCF7780.jpg`} />

      {/* <div>
        <canvas ref={overviewCanvasRef} id={'overview-canvas'}></canvas>
        <div style={{height: `${window.innerHeight*3}px`}}></div>
      </div> */}

      {/* COASTERS */}

      <div className={'row'}>

        <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/palace1.jpg`} /></div>

        {/* <div className={'col col-8'}>
          <canvas ref={coasterCanvasRef} id={'coaster-canvas'}></canvas>
          <div style={{height: `640px`}}></div>
        </div> */}

        <div className={'col col-3'}>
          <h2>Coasters</h2>
        </div>

        <div className={'col col-3'}>
          <p>
            As much as its a restaurant, it's a bar.
            So obviously, we needed to develop some coasters.
            </p>
        </div>

        <div className={'col col-3'}>
          <p>
            Another cheap takeaway for customers, these coasters serve a dual purpose.
            </p>
        </div>

      </div>

      <div className={'row'}>

        <div className={'col col-3'}>
          <h2>Post Cards</h2>
        </div>

        <div className={'col col-3'}>
          <p>
            One of the activation strategies  we created was a series od Local Post post cards.
            These takeaways are prganic marketing materials that customers
          </p>
        </div>

        <div className={'col col-3'}>
          <p>
            of Localpost can mail to their friends and family. They can simply leave it and the Local
            Post staff will mail it.  
          </p>
        </div>
        <div className={'col col-8'}><img src={`${process.env.PUBLIC_URL}/images/LocalPost/palace2.jpg`} /></div>

      </div>

    </div>
  );
}

export default Metro;