import React from "react";
import "./preview.styles.scss";
import { BuilderContext } from "../../context/context.component";

const Preview = () => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <div>
          <div className="bread-top" />

          {context.userChoice.length ? (
            context.userChoice.map((element) =>
              !element.quantity ? (
                console.log(element)
              ) : (
                <div className={`${element.name}`}>{element.quantity}</div>
              )
            )
          ) : (
            <h1>no items</h1>
          )}

          <div className="bread-bottom" />
        </div>
      )}
    </BuilderContext.Consumer>
  );
};

export default Preview;
