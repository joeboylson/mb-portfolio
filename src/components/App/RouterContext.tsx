import * as React from 'react';

export const RouterContext = React.createContext({})

const RouterProvider: React.FC = (Props) => {

  const [route, setRoute] = React.useState('localpost');

  const context = {
    route: route,
    setRoute: setRoute    
  }

  return (
    <RouterContext.Provider value={context}>
      {Props.children}
    </RouterContext.Provider>
  )
}

export default RouterProvider;