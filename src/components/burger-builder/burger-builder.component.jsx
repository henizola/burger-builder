import React from "react";
import Builder from "../builder/builder.component";
import Preview from "../preview/preview.comopnents";
import { BuilderContext } from "../../context/context.component";
import {
  Container,
  PreviewContainer,
  BuilderContainer,
  Price,
} from "./burger-builder.styles";
const BurgerBuilder = (props) => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <Container>
          <PreviewContainer>
            <Preview />
            <Price>
              $ {context.price}{" "}
              <button onClick={() => props.history.push("/checkout")}>
                checkout
              </button>
            </Price>
          </PreviewContainer>
          <BuilderContainer>
            <Builder />
          </BuilderContainer>
        </Container>
      )}
    </BuilderContext.Consumer>
  );
};

export default BurgerBuilder;
