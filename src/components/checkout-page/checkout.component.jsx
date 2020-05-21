import React from "react";
import { BuilderContext } from "../../context/context.component";
import {
  CheckoutContainer,
  ViewContainer,
  ReciptContainer,
  Container,
} from "./checkout.styles";

import Preview from "../preview/preview.comopnents";
import Recipt from "../recipt/recipt.component";

const CheckOut = (props) => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <Container>
          <button
            onClick={() => props.history.push("/")}
            style={{ margin: "auto" }}
          >
            Home
          </button>
          <CheckoutContainer>
            <ViewContainer>
              <Preview />
            </ViewContainer>
            <ReciptContainer>
              <Recipt />
            </ReciptContainer>
          </CheckoutContainer>
        </Container>
      )}
    </BuilderContext.Consumer>
  );
};
export default CheckOut;
