import React from "react";
import { ThemeProviderContext } from "./theme-provider";

const useTheme = () => {
  const context = React.useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};

export default useTheme;
