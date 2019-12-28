import React from 'react';

// styling
import './Grid.css'

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
            <img src={item.image}/>
          </div>

        )
      })}

    </div>
  );
}

export default Grid;