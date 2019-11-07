import * as React from 'react';

export const CursorContext = React.createContext({})

const ContextProvider: React.FC = (Props) => {

  const [cursorElement, setCursorElement] = React.useState(null);

  const context = {
    setCursorElement: setCursorElement,
    cursorElement: cursorElement    
  }

  return (
    <CursorContext.Provider value={context}>
      {Props.children}
    </CursorContext.Provider>
  )
}

export default ContextProvider;