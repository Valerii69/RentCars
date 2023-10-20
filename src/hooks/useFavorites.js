import { useState, useEffect } from 'react';

const getFavoritesFromLocalStorage = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const addFavoriteToLocalStorage = carId => {
  const favorites = getFavoritesFromLocalStorage();
  favorites.push(carId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const removeFavoriteFromLocalStorage = carId => {
  const favorites = getFavoritesFromLocalStorage();
  const newFavorites = favorites.filter(id => id !== carId);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage());

  useEffect(() => {
    setFavorites(getFavoritesFromLocalStorage());
  }, []);

  const addFavorite = carId => {
    addFavoriteToLocalStorage(carId);
    setFavorites(getFavoritesFromLocalStorage());
  };

  const removeFavorite = carId => {
    removeFavoriteFromLocalStorage(carId);
    setFavorites(getFavoritesFromLocalStorage());
  };

  return [favorites, addFavorite, removeFavorite];
};
