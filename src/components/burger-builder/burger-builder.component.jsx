import React from "react";
import Builder from "../builder/builder.component";
import Preview from "../preview/preview.comopnents";
import "./builder.styles.scss";
import { BuilderContext } from "../../context/context.component";
const BurgerBuilder = ({ price }) => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <div className="containers">
          <div className="preview">
            <div className="burger">
              <Preview />
            </div>
            <div
              style={{ marginTop: "10px", color: "white", fontSize: "larger" }}
            >
              {context.price}
            </div>
          </div>
          <div className="builder">
            <Builder />
          </div>
        </div>
      )}
    </BuilderContext.Consumer>
  );
};

export default BurgerBuilder;
