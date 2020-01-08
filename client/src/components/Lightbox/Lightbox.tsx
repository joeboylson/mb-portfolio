import React from 'react';
import ReactDOM from 'react-dom';

// styling
import './Lightbox.css'

export interface LightboxProps {
  image: string;
  cropOffset?: number;
}

const Lightbox: React.FC<LightboxProps> = (Props) => {

  const [isVisible, setIsVisible] = React.useState(false)

  const lightBoxStyle = {
    transform: `translateY(${Props.cropOffset || 0}px)`
  } as React.CSSProperties

  // if lightbox is closed
  return (
    
    <div>
      <img 
        src={Props.image} 
        alt={''}
        className={'lightbox-image'}
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