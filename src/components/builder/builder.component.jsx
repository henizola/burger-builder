import React from "react";
import "./builder.styles.scss";
import { connect } from "react-redux";
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
const mapStateToProps = (state) => ({
  items: state.builder.items,
});

export default connect(mapStateToProps)(Builder);
