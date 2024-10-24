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
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
    border-radius:14px
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
