import * as s from './Header.styled';
import { ReactComponent as BurgerMenuIcon } from '../../icons/burger-menu.svg';
import logo from '../../images/logo.png';

export const Header = ({ onSideBar }) => {
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
          <img loading="lazy" src={logo} alt="Car" /> <p>RentCars</p>
        </s.DivImg>
      </s.DivBtn>
    </s.Container>
  );
};
