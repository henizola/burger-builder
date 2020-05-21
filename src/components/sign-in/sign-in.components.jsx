import React, { useState } from "react";
import Form from "../form/form.component";
import CustomButton from "../custom-button/custom-button.component";
import "./signin.styles.scss";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };
  const handleClick = () => {
    if (email !== "" && password !== "") {
      props.history.push("/home");
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
        <CustomButton onClick={handleClick}>signin</CustomButton>
      </div>
    </form>
  );
};
export default SignIn;
