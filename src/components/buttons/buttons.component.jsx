import React from "react";
import "./button.styles.scss";
import { BuilderContext } from "../../context/context.component";
const Buttons = ({ item }) => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <div className="select">
          <span className="title">{item.name}</span>
          <button name={item.name} onClick={context.addItem}>
            More
          </button>
          <button name={item.name} onClick={context.removeItem}>
            Less
          </button>
        </div>
      )}
    </BuilderContext.Consumer>
  );
};

export default Buttons;
