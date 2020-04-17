import React, { useState, useCallback, useEffect } from "react";

const NavigationContext = React.createContext({
  activeDrawer: null,
  toggleDrawer: () => {},
});

export function NavigationProvider({ children }) {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const toggleDrawer = useCallback(
    (drawer) => {
      if (drawer === activeDrawer) {
        setActiveDrawer(null);
      } else if (!activeDrawer) {
        setActiveDrawer(drawer);
      } else {
        // Nothing
      }
    },
    [activeDrawer]
  );

  useEffect(() => {
    window.toggleDrawer = toggleDrawer;
  }, [toggleDrawer]);

  return (
    <NavigationContext.Provider value={{ activeDrawer, toggleDrawer }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function withNavigationProvider(C) {
  return (props) => (
    <NavigationProvider>
      <C {...props} />
    </NavigationProvider>
  );
}

export default NavigationContext;
