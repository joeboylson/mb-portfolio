import * as React from 'react';

export const AppContext = React.createContext({})

const AppProvider: React.FC = (Props) => {

  const [cursorElement, setCursorElement] = React.useState(null);

  const context = {
    setCursorElement: setCursorElement,
    cursorElement: cursorElement,
  }

  return (
    <AppContext.Provider value={context}>
      {Props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;