import React, { memo } from 'react';
import * as s from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

 const Header = ({ onSideBar }) => {
  return (
    <s.Container>
      <s.DivBtn>
        <s.BurgerBtn
          type="button"
          onClick={() => {
            onSideBar();
          }}
        >
          <BurgerMenuIcon />
        </s.BurgerBtn>
        <s.DivImg>
          <img src={logo} alt="Car" width="100" height="75" />
          <Link to="/">
            <s.HeaderP>RentCars</s.HeaderP>
          </Link>
        </s.DivImg>{' '}
      </s.DivBtn>
    </s.Container>
  );
};
export default memo(Header);
