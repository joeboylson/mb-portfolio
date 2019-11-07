import React from 'react';
import './Main.css';
import { RouterContext } from '../App/RouterContext';

// pages
import Home from '../Pages/Home';
import Design from '../Pages/Design';
import Illustration from '../Pages/Illustration'
import Photography from '../Pages/Photography'
import Contact from '../Pages/Contact'

export interface MainProps {
  style: React.CSSProperties
}

const Main: React.FC<MainProps> = (Props) => {

  const context: any = React.useContext(RouterContext);
  
  const getStyle = (name:string) => {
    return {
      position: 'absolute',
      top: '0',
      opacity: `${name === context['route'] ? 1 : 0}`,
      transitionDuration: '0.5s',
      pointerEvents: `${name === context['route'] ? 'initial' : 'none'}`
    } as React.CSSProperties
  }

  return (
    <div id='main' style={Props.style}>
      <div id="grid">

        <div style={getStyle('home')}>
          <Home/>
        </div>

        <div style={getStyle('design')}>
          <Design/>
        </div>

        <div style={getStyle('illustration')}>
          <Illustration/>
        </div>

        <div style={getStyle('photography')}>
          <Photography/>
        </div>

        <div style={getStyle('contact')}>
          <Contact/>
        </div>

      </div>
    </div>
  );
}

export default Main;


// import React from 'react';

// export interface SwitcherProps {
//   from?: any | null
//   to: any
//   delay: number
// }

// const Switcher: React.FC<SwitcherProps> = (Props) => {

//   const [isSwitched, setIsSwitched] = React.useState(false)

//   const returnEmpty = () => {
//     return (
//       <div></div>
//     )
//   }

//   const From = Props.from ? Props.from : returnEmpty;
//   const To = Props.to;

//   React.useEffect(() => {
//     let t = setTimeout(() => {
//       setIsSwitched(true)
//       clearTimeout(t)
//     }, Props.delay)
//   }, [Props.delay])

//   return (
//     <div>
            
//       { isSwitched ? (
//         <To />
//       ) : (
//         <From />
//       )}

//     </div>
//   );
// }

// export default Switcher;
