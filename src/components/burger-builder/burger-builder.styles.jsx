import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 78vh;
  @media (max-width: 375) {
    margin: auto;
  }
`;
export const PreviewContainer = styled.div`
  width: 100%;
  height: 60%;
  display: grid;
  grid-template-rows: 1fr 30px;
  justify-content: center;
`;

export const BuilderContainer = styled.div`
  height: 40%;
  width: 400px;
  margin: auto;
`;

export const Price = styled.span`
  color: white;
  font-size: 45px;
  margin: auto;
  margin-top: -35px;
`;
