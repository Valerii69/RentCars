// import { FavoriteAuto } from '../component/FavoriteAuto/FavoriteAuto';
import axios from 'axios';
import { useState, useEffect } from 'react';
// import { getCarByIdCatalog } from 'api/adverts';
import { Section } from 'component/Section/Section';
import { ListCatalog } from 'component/ListCatalog/ListCatalog';
import { Message } from 'component/Message/Message';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useFavorites } from 'hooks/useFavorites';

import { Filter } from '../component/Filter/Filter';
const baseURL = 'https://653015866c756603295e3ada.mockapi.io/adverts/';

const Favorite = () => {
  const [favorites] = useFavorites();
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchFavoriteCars = async () => {
      try {
        const promises = favorites.map(id => axios.get(`${baseURL}/${id}`));
        const responses = await Promise.all(promises);
        const validCars = responses.map(response => response.data);

        setFavoriteCars(validCars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchFavoriteCars();
  }, [favorites]);

  return (
    <>
      <Filter />
      <Section title="Favorites page">
        {isLoading && Loading.arrows()}
        {!favorites.length && (
          <Message text="You don't have any favorite cars yet!" />
        )}
        {favorites.length > 0 && <ListCatalog data={favoriteCars} />}
      </Section>
    </>
  );
};
export default Favorite;
