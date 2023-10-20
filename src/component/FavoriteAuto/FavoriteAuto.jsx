import axios from 'axios';
import { useEffect, useState } from 'react';
import { CarDetails } from '../CarDetails/CarDetails';
import {
  Button,
  Collection,
  Decor,
  IconContainer,
  Img,
  Info,
  Item,
  Name,
  Price,
  Title,
} from '../ListAuto/ListAuto.styled';
import activeIcon from '../../images/active.svg';
import { useFavorites } from '../../hooks/useFavorites';

const baseURL = 'https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts';

export const FavoriteAuto = () => {
  const [favorites, , removeFavorite] = useFavorites();
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
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

  const openModal = car => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
  };

  return (
    <>
      <Collection>
        <ul>
          {favoriteCars.map(car => {
            return (
              <Item
                key={car.id}
                onClick={() => {
                  openModal(car);
                }}
              >
                <Img src={car.img} alt="" width="274" height="268" />
                <IconContainer
                  onClick={e => {
                    e.stopPropagation();
                    removeFavorite(car.id);
                  }}
                >
                  <img src={activeIcon} alt="icon" />
                </IconContainer>
                <Title>
                  <Name>
                    {car.make} <Decor>{car.model}</Decor>, {car.year}
                  </Name>
                  <Price>{car.rentalPrice}</Price>
                </Title>
                <Info>
                  {car.address} | {car.rentalCompany} | {car.type} |
                  {car.mileage} m |{car.accessories[2]}
                </Info>
                <Button>Learn more</Button>
              </Item>
            );
          })}
        </ul>
        {selectedCar && <CarDetails car={selectedCar} onClose={closeModal} />}
      </Collection>
    </>
  );
};
