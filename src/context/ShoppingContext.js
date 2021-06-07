import { createContext } from "react";

const ShoppingContext = createContext({
  path: 1,
  nextPath: () => {},
  prevPath: () => {},
  details: {},
  updateDetails: () => {},
  cartItems: [],
  adressData: {},
  updateAdress: () => {},
});

export default ShoppingContext;
