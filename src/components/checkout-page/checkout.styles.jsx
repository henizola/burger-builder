import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 80vw;
  margin: auto;
  height: 70vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "view recipt";
`;

export const ViewContainer = styled.div`
  grid-area: view;
  margin: auto;
`;
export const ReciptContainer = styled.div`
  grid-area: recipt;
  margin: auto;
`;
export const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
`;
