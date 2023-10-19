import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeLink = styled(NavLink)`
  color: #121417;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  margin-left: 15px;

  &.active {
    color: #3470ff;
  }
`;
