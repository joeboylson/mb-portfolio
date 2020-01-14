import React from 'react';

// styling
import './Grid.css'

// lightbox
import Lightbox from '../Lightbox/Lightbox'

export interface GridItemProps {
  image: string;
}

export interface GridProps {
  items?: Array<GridItemProps>
}

const Grid: React.FC<GridProps> = (Props) => {
  return (
    <div className={'grid fadeUp'}>

      { Props.items && Props.items.map((item:any, index:number) => {

        return (
        
          <div
            key={index} 
            className={'grid-item fadeUp'}
            style={{ animationDelay: `${(index+1)/10}s`}} 
          >
            <Lightbox 
              image={item.image} 
              moveVertical={item.moveVertical}
              moveHorizontal={item.moveHorizontal}  
            />
          </div>

        )
      })}

    </div>
  );
}

export default Grid;