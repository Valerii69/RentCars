import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999; 

`;

export const ModalField = styled.div`
  position: relative;
  width: 541px;
  padding: 50px;

  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.accentBgColor};
  z-index: 1000;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;

  transition: color 250ms ${({ theme }) => theme.timingFunction.cubicBezier},
    background-color 250ms ${({ theme }) => theme.timingFunction.cubicBezier},
    box-shadow 250ms ${({ theme }) => theme.timingFunction.cubicBezier};
  &:hover {
    background-color: ${({ theme }) => theme.colors.colorCar};
    border-radius: 50%;
    scale: 1.5;
    color: ${({ theme }) => theme.colors.colorCarAccent};
    box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
      rgba(0, 0, 0, 0.16) 1px 4px 6px;
  }
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.primary};
`;
