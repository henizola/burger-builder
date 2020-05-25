import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../../assets/1531643.svg";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./nav-bar.styles.scss";
import { Link } from "react-router-dom";

const NavBar = (props) => {
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
      {props.history.location.pathname === "/checkout" ? (
        <div>
          <button onClick={() => props.history.push("/home")}>Home</button>
          <button
            onClick={() => props.history.push("/order")}
            style={{ marginLeft: "50px" }}
          >
            Order
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default NavBar;
