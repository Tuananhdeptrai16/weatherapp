import { createContext } from "react";

const store = {
  name: "bbo",
};
const StoreContext = createContext(store);
export default StoreContext;
