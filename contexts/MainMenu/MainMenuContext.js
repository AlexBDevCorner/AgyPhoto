import React, { useState } from 'react';

export const MainMenuContext = React.createContext({});

export const MainMenuProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MainMenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MainMenuContext.Provider>
  );
};
