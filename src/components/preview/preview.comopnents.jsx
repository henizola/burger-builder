import React from "react";
import { BuilderContext } from "../../context/context.component";
import { ItemContainer } from "./preview.styles";
import "./preview.styles.scss";
const Preview = () => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <ItemContainer>
          <div className="bread-top" />

          {context.userChoice.length ? (
            context.userChoice.map((element) =>
              !element.quantity ? (
                console.log(element)
              ) : (
                <div className={`${element.name}`}>
                  <span
                    style={{
                      marginLeft: "45%",
                      color: "White",
                    }}
                  >
                    {element.quantity}
                  </span>
                </div>
              )
            )
          ) : (
            <h1 style={{ margin: "auto", marginLeft: "30%" }}>No Items</h1>
          )}

          <div className="bread-bottom" />
        </ItemContainer>
      )}
    </BuilderContext.Consumer>
  );
};

export default Preview;
