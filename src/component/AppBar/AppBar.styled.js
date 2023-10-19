import styled from "styled-components";

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;

  min-height: 100vh;
  background: white;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  min-height: 100%;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;
  padding: 15px;

  border-bottom: 2px solid;
  border-image: linear-gradient(to right, #ffffff, #90acaa, #6a9393, #ffffff)
    47% 0%;
`;
