import { Filter } from '../component/Filter/Filter';
import { useState, useEffect, useRef } from 'react';
import { clearSelect } from 'helpers/clearSelect';
import { getCarCatalog } from 'api/adverts';
import { Section } from 'component/Section/Section';
import { ListCatalog } from '../component/ListCatalog/ListCatalog';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Message } from '../component/Message/Message';
import {
  getCarsByMake,
  getCarsByPrice,
  getCarsByMileage,
} from 'helpers/getCars';

const Catalog = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([]);
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const selectInputBrandRefCatalog = useRef(null);
  const selectInputPriceRefCatalog = useRef(null);

  useEffect(() => {
    setIsLoading(true);

    const catalogCars = async () => {
      try {
        const response = await getCarCatalog();
        setDataCatalog(response.data);
        setFilterCatalog(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    catalogCars();
  }, []);

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

  const filterMakeCar = getCarsByMake(dataCatalog, inputBrand);

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
    clearSelect(selectInputBrandRefCatalog, selectInputPriceRefCatalog);
    setFilterCatalog(dataCatalog);
  };

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}

        <Filter
          data={dataCatalog}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          resetFilters={resetFilters}
          mileageFrom={mileageFrom}
          mileageTo={mileageTo}
          selectInputBrandRef={selectInputBrandRefCatalog}
          selectInputPriceRef={selectInputPriceRefCatalog}
        />
        {!filterCatalog.length && (
          <Message text="Sorry, there are no machines with such parameters!" />
        )}
        <ListCatalog data={filterCatalog} />
      </Section>
    </>
  );
};
export default Catalog;
