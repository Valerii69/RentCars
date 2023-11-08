import { useState, useEffect,useRef } from 'react';
import { getCarByIdCatalog } from 'api/adverts';
import { Section } from 'component/Section/Section';
import { ListCatalog } from 'component/ListCatalog/ListCatalog';
import { Message } from 'component/Message/Message';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useFavorites } from 'hooks/useFavorites';
import { clearSelect } from 'helpers/clearSelect';

import { Filter } from '../component/Filter/Filter';
import {
  getCarsByMake,
  getCarsByPrice,
  getCarsByMileage,
} from 'helpers/getCars';

const FavoritesPage = () => {
  const [favorites] = useFavorites();
  const [dataFavoriteCar, setDataFavoriteCar] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([]);
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const selectInputBrandRefFavorite = useRef(null);
  const selectInputPriceRefFavorite = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const catalogFavoriteCars = async () => {
      try {
        const promises = favorites.map(id => getCarByIdCatalog(id));

        const responses = await Promise.all(promises);

        const favoriteCar = responses.map(response => response.data);

        setDataFavoriteCar(favoriteCar);
        setFilterCatalog(favoriteCar);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    catalogFavoriteCars();
  }, [favorites]);

  const handleChange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'inputBrand':
        setInputBrand(value);
        break;

      case 'inputPrice':
        setInputPrice(value);
        break;

      case 'carMileageFrom':
        setMileageFrom(value);
        break;

      case 'carMileageTo':
        setMileageTo(value);
        break;

      default:
        break;
    }
  };

  const filterMakeCar = getCarsByMake(dataFavoriteCar, inputBrand);

  const filterPriceCar = getCarsByPrice(filterMakeCar, inputPrice);

  const filterMileageCar = getCarsByMileage(
    filterPriceCar,
    mileageFrom,
    mileageTo
  );

  const filterMileageCarNoPrice = getCarsByMileage(
    filterMakeCar,
    mileageFrom,
    mileageTo
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!inputPrice & (!mileageFrom || !mileageTo)) {
      setFilterCatalog(filterMakeCar);
      return;
    }

    if (!inputPrice) {
      setFilterCatalog(filterMileageCarNoPrice);
      return;
    }

    if (!mileageFrom || !mileageTo) {
      setFilterCatalog(filterPriceCar);
      return;
    }

    setFilterCatalog(filterMileageCar);
  };

  const resetFilters = () => {
    setInputBrand('');
    setInputPrice('');
    setMileageFrom('');
    setMileageTo('');
    clearSelect(selectInputBrandRefFavorite, selectInputPriceRefFavorite);
    setFilterCatalog(dataFavoriteCar);
  };

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}
        {!favorites.length && (
          <Message text="You don't have any favorite cars yet!" />
        )}
        {favorites.length > 0 && (
          <>
            <Filter
              data={dataFavoriteCar}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              resetFilters={resetFilters}
              mileageFrom={mileageFrom}
              mileageTo={mileageTo}
              selectInputBrandRef={selectInputBrandRefFavorite}
              selectInputPriceRef={selectInputPriceRefFavorite}
            />
            {!filterCatalog.length && (
              <Message text="Sorry, there are no machines with such parameters!" />
            )}
            <ListCatalog data={filterCatalog} />
          </>
        )}
      </Section>
    </>
  );
};
export default FavoritesPage;
