import React from 'react';

let overviewCanvas:any, overviewCtx:any;
let images:any = [];
let loadedImageCount = 0;

const render = (image:any) => {
  let offset = window.scrollY/3 < window.innerHeight/3 ? window.scrollY/3 : window.innerHeight/3
  try {
    overviewCtx.clearRect(0, 0, 10000, 10000)
    overviewCtx.drawImage(image, 0, window.innerHeight/3 - offset, image.width, image.height);
  }
  catch(e) {
    console.log(e)
  }
}

const onScroll = () => {
  if (window.scrollY > window.innerHeight/3) {  
    let scrollIndex = Math.ceil((window.scrollY - window.innerHeight/3) / 12)
    
    if (scrollIndex < images.length) {
      render(images[scrollIndex])
    }

  }
}

const Localpost: React.FC = () => {

  let [loading, setLoading] = React.useState(true)

  React.useEffect(() => {

    // get the canvas
    overviewCanvas = document.getElementById('overview-canvas')
    overviewCanvas.width = window.innerWidth;
    overviewCanvas.height = window.innerHeight * 4;

    overviewCtx = overviewCanvas.getContext('2d');

    // load the images
    // overview = 181
    if (images.length < 181) {
      images = [];
      for (let i=0; i<=180; i++) {
        
        let newImage = new Image()
        let imagesSuffix = `00${i+90}`.slice(-4);
        newImage.src = `${process.env.PUBLIC_URL}/images/overview/allItemsAlpha${imagesSuffix}.jpg`
        images.push(newImage)
        
        newImage.addEventListener('load', () => {
          loadedImageCount++;

          if (loadedImageCount >= 181) {
            setLoading(false)
          }
        })
      }
    }

    // render the first one
    images[0].onload = () => {
      render(images[0])
    }
    
    // set up event listener
    window.addEventListener('scroll', onScroll);

  }, [])

  return (
    <div id={'localpost'}>

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

      <div>
        <canvas id={'overview-canvas'}></canvas>
        <div id={'overview-canvas-spacer'}></div>
      </div>

      {/* COASTERS */}

      <div className={'row'}>

        <div className={'col col-8'}>
          <canvas id={'coaster-canvas'}></canvas>
        </div>

        <div className={'col col-3'}>
          <h2>Coasters</h2>
        </div>

        <div className={'col col-3'}>
          <p>
            As much as its a restaurant, it's a bar.
            So obviously, we needed to develop some coasters/
            </p>
        </div>

        <div className={'col col-3'}>
          <p>
            Another cheap takeaway for customers, these coasters serve a dual purpose.
            </p>
        </div>

      </div>

    </div>
  );
}

export default Localpost;