import React, { useState } from "react";
import Form from "../form/form.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signin.styles.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  return (
    <form>
      <Form
        name="email"
        type="email"
        lable="Email"
        valu={email}
        handleChange={handleChange}
      />
      <Form
        name="Password"
        type="password"
        lable="Password"
        valu={password}
        handleChange={handleChange}
      />
      <div className="buttons">
        <CustomButton>signin</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
          Google-Signin
        </CustomButton>
      </div>
    </form>
  );
};
export default SignIn;
