import React from "react";
import {
  ReciptCont,
  ReciptTitle,
  Price,
  ReciptBody,
  TotalPay,
} from "./recipt.style";
import { BuilderContext } from "../../context/context.component";
const Recipt = () => {
  return (
    <BuilderContext.Consumer>
      {(context) => (
        <ReciptCont>
          <ReciptTitle>Sample Burger House</ReciptTitle>
          <ReciptBody>
            {" "}
            {context.userChoice.map((element) => (
              <React.Fragment>
                <Price>{element.name}</Price>
                <Price>
                  {element.quantity} x {element.price}
                </Price>
              </React.Fragment>
            ))}
          </ReciptBody>
          <TotalPay>
            <Price>total</Price>
            <Price>{context.price}</Price>
            <Price>Vat</Price>
            <Price>{(context.price * 15) / 100}</Price>
            <Price>Pay</Price>
            <Price>{context.price + (context.price * 15) / 100}</Price>
          </TotalPay>
        </ReciptCont>
      )}
    </BuilderContext.Consumer>
  );
};
export default Recipt;
