import { Outlet } from "react-router-dom";
import { Header, Box, Main } from "./AppBar.styled";
import { Navigation } from "../Navigation/Navigation";

export const AppBar = () => {
  return (
    <Box>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </Box>
  );
};
