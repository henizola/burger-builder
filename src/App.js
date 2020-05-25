import React from "react";
import BurgerBuilder from "./components/burger-builder/burger-builder.component";
import NavBar from "./components/navbar/nav-bar.components";
import SignIn from "./components/sign-in/sign-in.components";
import { BuilderProvider } from "./context/context.component";
import { Route } from "react-router-dom";
import Modal from "./components/modal/modal.component";
import CheckOut from "./components/checkout-page/checkout.component";
const App = () => {
  return (
    <BuilderProvider>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/home" component={BurgerBuilder} />
      <Route path="/checkout" component={CheckOut} />
      <Route exact path="/order" component={Modal} />
    </BuilderProvider>
  );
};
export default App;
