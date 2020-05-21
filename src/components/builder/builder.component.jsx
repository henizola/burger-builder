import React from "react";
import "./builder.styles.scss";
import Buttons from "../buttons/buttons.component";
import { BuilderContext } from "../../context/context.component";

const Builder = () => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <div className="builder">
          {context.items.map((element) => (
            <Buttons key={element.id} item={element} />
          ))}
        </div>
      )}
    </BuilderContext.Consumer>
  );
};

export default Builder;
