import React from 'react';
import ReactDOM from 'react-dom';

// styling
import './Lightbox.css'

export interface LightboxProps {
  image: string;
  moveVertical?: number;
  moveHorizontal?: number;
}

const Lightbox: React.FC<LightboxProps> = (Props) => {

  const [isVisible, setIsVisible] = React.useState(false)
  const imageRef:any = React.useRef(null);

  const lightBoxStyle = {
    transform: `translateY(${Props.moveVertical || 0}px)`
  } as React.CSSProperties;

  React.useEffect(() => {
    if (imageRef.current) {
      let irc = imageRef.current;

      let image = new Image()
      image.src = irc.src;

      if (image.width > image.height) {

        console.log(irc.style)
        console.log(Props.moveHorizontal)

        irc.style.transform = `translateX(${Props.moveHorizontal || 0}px)`;
        irc.classList.remove('crop-horizontal');
        irc.classList.add('crop-vertical');
        return 
      }

    }
  })

  // if lightbox is closed
  return (
    
    <div>
      <img 
        ref={imageRef}
        src={Props.image} 
        alt={''}
        className={`lightbox-image crop-horizontal`}
        onClick={() => setIsVisible(true)} 
        style={lightBoxStyle}
      />

      { isVisible && 
        ReactDOM.createPortal(         
          <div className={'lightbox-open-image'}>
            <img 
              src={Props.image} 
              alt={''}
              onClick={() => setIsVisible(false)} 
            />
          </div>,
          document.body
        )
      }
    </div>

  );

}

export default Lightbox; 