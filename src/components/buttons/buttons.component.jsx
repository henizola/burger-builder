import React from "react";
import "./button.styles.scss";
import { BuilderContext } from "../../context/context.component";
const Buttons = ({ item }) => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <div className="select">
          <div className={`${item.name} pic `} />
          <div> </div>
          <button name={item.name} onClick={context.addItem}>
            more
          </button>
          <button name={item.name} onClick={context.removeItem}>
            less
          </button>
        </div>
      )}
    </BuilderContext.Consumer>
  );
};

export default Buttons;
