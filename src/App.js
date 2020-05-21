import React from "react";
import BurgerBuilder from "./components/burger-builder/burger-builder.component";
import NavBar from "./components/navbar/nav-bar.components";
import SignIn from "./components/sign-in/sign-in.components";
import { BuilderProvider } from "./context/context.component";
import { Route } from "react-router-dom";
import CheckOut from "./components/checkout-page/checkout.component";
const App = () => {
  return (
    <BuilderProvider>
      <NavBar />
      <Route exact path="/" component={BurgerBuilder} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/checkout" component={CheckOut} />
    </BuilderProvider>
  );
};
export default App;
