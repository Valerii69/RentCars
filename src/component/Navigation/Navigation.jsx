import { HomeLink } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <>
      <HomeLink to="/">Home</HomeLink>
      <HomeLink to="/catalog">Catalog</HomeLink>
      <HomeLink to="/favorites">Favorites</HomeLink>
    </>
  );
};
