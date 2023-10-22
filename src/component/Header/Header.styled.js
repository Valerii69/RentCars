import styled from 'styled-components';

export const Container = styled.div`
  /* padding-left: 128px;
  padding-right: 128px; */
  /* margin: 0 auto; */
  /* position: relative; */
`;

export const DivBtn = styled.div`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  /* background-color: ${({ theme }) => theme.colors.bgHero}; */
  display: flex;
  align-items: center;
  p {
    font-size: 32px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.colorCar};
    margin-left: 10px;
  }
`;

export const BurgerBtn = styled.button`
  margin-left: 60px;
  background-color: transparent;
  border: none;
  padding: 0;

  width: 34px;
  height: 34px;

  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const DivImg = styled.div`
  display: flex;
  align-items: center;

  width: 100px;

  img {
    margin-left: 20px;
  }
`;
