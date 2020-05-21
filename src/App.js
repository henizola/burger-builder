import React from "react";
import "./App.css";
import BurgerBuilder from "./components/burger-builder/burger-builder.component";
import NavBar from "./components/navbar/nav-bar.components";
import SignIn from "./components/sign-in/sign-in.components";
import { BuilderProvider } from "./context/context.component";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BuilderProvider>
        <NavBar />
        <Route exact path="/" component={BurgerBuilder} />
        <Route exact path="/sign-in" component={SignIn} />
      </BuilderProvider>
    </div>
  );
};
export default App;
