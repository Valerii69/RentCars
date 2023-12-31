import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  margin-top: 50px;
`;

export const ListItems = styled.li`
  display: inline-block;
  flex-basis: 274px;
  height: 426px;
  text-decoration: none;
  margin-bottom: 50px;
`;
export const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  margin-bottom: 30px;
  margin-top: 50px;
  transition: background-color 250ms
    ${({ theme }) => theme.timingFunction.cubicBezier};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accentHover};
    cursor: pointer;
  }
`;
