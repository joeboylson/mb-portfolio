import React from 'react';
import ReactDOM from 'react-dom';

// styling
import './Lightbox.css'

export interface LightboxProps {
  image: string;
}

const Lightbox: React.FC<LightboxProps> = (Props) => {

  const [isVisible, setIsVisible] = React.useState(false)

  // if lightbox is closed
  return (
    
    <div>
      <img 
        src={Props.image} 
        className={'lightbox-image'}
        onClick={() => setIsVisible(true)} 
      />

      { isVisible && 
        ReactDOM.createPortal(         
          <div className={'lightbox-open-image'}>
            <img 
              src={Props.image} 
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