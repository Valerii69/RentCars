import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 274px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: rgba(52, 112, 255, 1);
  padding: 12px, 99px, 12px, 99px;
  margin-bottom: 30px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    -webkit-box-shadow: 5px 5px 7px 1px ${({ theme }) => theme.colors.white};
    -moz-box-shadow: 5px 5px 7px 1px ${({ theme }) => theme.colors.white};
    box-shadow: 5px 5px 7px 1px ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
