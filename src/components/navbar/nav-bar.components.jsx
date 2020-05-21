import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/1531643.svg";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./nav-bar.styles.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [currentUser, setCurrentUser] = useState("");
  let [unsubscribeFromAuth, setUnsubscribeFromAuth] = useState(null);
  unsubscribeFromAuth = null;

  useEffect(() => {
    setUnsubscribeFromAuth(
      auth.onAuthStateChanged(async (user) => {
        setCurrentUser(user);
        createUserProfileDocument(user);
      })
    );
  }, [unsubscribeFromAuth]);

  return (
    <nav>
      <Link to="/">
        <Logo className="logo" />
      </Link>

      <Link to="/sign-in" className="option">
        {currentUser ? (
          <h2 onClick={() => auth.signOut()}>SIGN-OUT</h2>
        ) : (
          <h1>sign-in</h1>
        )}
      </Link>
    </nav>
  );
};

export default NavBar;
