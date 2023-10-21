import styled from 'styled-components';
import logo from '../../images/logo.png';

export const Box = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 0 128px;

  /* min-height: 100vh; */
  background: #f5f9ff;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  max-width: 1440px;
  position: relative;
`;

export const Header = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* justify-content: space-around; */
  -webkit-box-align: center;
  align-items: center;

  padding: 10px 70px;
  border: 1.5px solid rgb(248, 249, 250);
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
  backdrop-filter: blur(10.5px);
  border-radius: 15px;
`;

export const LogoHeader = styled.div`
  position: absolute;
  background-image: url(${logo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  height: 42px;
  width: 59px;
  top: 7px;
  left: 15px;
  z-index: -1;
`;
