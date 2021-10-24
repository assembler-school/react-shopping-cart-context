import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAppContext } from "./context/App/AppContext";

import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import { setApiProducts } from "./utils/loadLocalStorageItems";

function App() {
  const {
    handleLoadingState,
    getLocalStorageItems,
    setLocalStorageItems,
  } = useAppContext();

  const stateKey = [
    { state: useAppContext().products, key: "products" },
    { state: useAppContext().cartItems, key: "cartItems" },
  ];

  useEffect(() => {
    handleLoadingState(true);
    setApiProducts();
    handleLoadingState(false);

    stateKey.forEach((item) => getLocalStorageItems(item.key));
  }, []);

  stateKey.forEach((item) => {
    useEffect(() => {
      if (item.state.length > 0) {
        setLocalStorageItems(item.key, item.state);
      }
    }, [item.state]);
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/new-product">
          <NewProduct />
        </Route>
        <Route path="/" exact>
          <Home fullWidth />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
