import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as CloseIconBtn } from '../../icons/x-close.svg';

export const DivSidebar = styled.div`
  background-color: ${({ theme }) => theme.colors.colorCar};
  /* height: 550px; */
  /* width: max(300vw, 350px); */
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
  backdrop-filter: blur(10.5px);
  border-radius: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 1000;
  position: absolute;

  top: 30px;
  left: ${isOpen => (isOpen ? '30px' : '0')};
  transition: transform 1s ease-out;
  transform: ${isOpen => (isOpen ? 'translateX(0%)' : 'translateX(-100%)')};
`;

export const Sidebar = styled.aside``;

export const List = styled.ul`
  li {
    font-weight: 700;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.bgAdditionalModal};
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
  padding: 12px 20px;
  border-radius: 12px;

  font-size: 16px;
  font-weight: 800;
  line-height: 1.25;

  transition: color 250ms ${({ theme }) => theme.timingFunction.cubicBezier},
    background-color 250ms ${({ theme }) => theme.timingFunction.cubicBezier},
    box-shadow 250ms ${({ theme }) => theme.timingFunction.cubicBezier};

  &.active {
    color: ${({ theme }) => theme.colors.colorCarAccent};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(122, 59, 2, 0.5) 4px 1px 4px,
      rgba(122, 59, 2, 0.5) 0px 4px 4px, rgba(122, 59, 2, 0.5) 1px 4px 6px;
  }
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

export const IconBtn = styled(CloseIconBtn)`
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.colors.primary};
`;
