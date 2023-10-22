import styled from 'styled-components';

export const Collection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  margin-bottom: 100px;
  column-gap: 50px;
  flex-shrink: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  padding: 0px;
`;

export const Item = styled.li`
  display: inline-block;
  width: 274px;
  /* height: 426px; */
  text-decoration: none;
  position: relative;

  /* gap: 29px; */
  /* margin-right: 29px; */
  /* &:nth-child(4n) {
    margin-right: 0;
  } */
  margin-bottom: 50px;

  font-family: Manrope;
`;
