import styled from "styled-components";

export const ReciptCont = styled.h1`
  width: 250px;
  height: 300px;
  display: grid;
  grid-template-rows: 30px 1fr 80px;
  grid-template-areas: "title " "body" "total";
  background-color: white;
  border-radius: 5px 5px;
  box-shadow: 5px 3px gray;
`;

export const ReciptTitle = styled.span`
  grid-area: title;
  color: black;
  height: 25px;
  border-bottom: 1px solid black;
  font-size: 18px;
  padding-left: 15px;
`;
export const ReciptBody = styled.div`
  grid-area: body;
  display: grid;
  margin-top: 0px;
  grid-template-columns: 2fr 1fr;
`;
export const Price = styled.span`
  font-size: 18px;
  justify-content: end;
  margin-bottom: 10px;
  padding-left: 15px;
`;
export const TotalPay = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(3, 20px);

  border-top: 1px solid black;
  margin-bottom: 10px;
`;
