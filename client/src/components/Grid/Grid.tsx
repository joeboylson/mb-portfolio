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
    <div className={'grid'}>

      { Props.items && Props.items.map((item:any, index:number) => {

        return (
        
          <div
            key={index} 
            className={'grid-item'} 
          >
            <img src={item.image}/>
          </div>

        )
      })}

    </div>
  );
}

export default Grid;