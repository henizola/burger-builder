import React from "react";
import "./App.css";
import BurgerBuilder from "./components/burger-builder/burger-builder.component";
import { Route, Redirect } from "react-router-dom";
import NavBar from "./components/navbar/nav-bar.components";
import SignIn from "./components/sign-in/sign-in.components";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
import { BuilderProvider } from "./context/context.component";
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      createUserProfileDocument(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <BuilderProvider>
          <NavBar />
          <Route exact path="/" component={BurgerBuilder} />
          <Route
            exact
            path="/sign-in"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignIn />
            }
          />
        </BuilderProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
