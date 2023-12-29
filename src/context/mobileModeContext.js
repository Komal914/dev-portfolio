import { createContext, useState } from "react";

export const MobileModeContext = createContext({
  isMobile: null,
  setIsMobile: () => null,
});

export const MobileModeContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(null);
  const value = { isMobile, setIsMobile };

  return (
    <MobileModeContext.Provider value={value}>
      {children}
    </MobileModeContext.Provider>
  );
};
