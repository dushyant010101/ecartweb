import React, { createContext } from "react";
import { All_product } from "../Data/All_product";

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const ContextValue = { All_product };
  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
};
export { ShopContextProvider };
