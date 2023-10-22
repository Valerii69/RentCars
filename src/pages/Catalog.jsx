import { Filter } from '../component/Filter/Filter';
import { useState, useEffect } from 'react';
import { getCarCatalog } from 'api/adverts';
import { Section } from 'component/Section/Section';
import { ListCatalog } from '../component/ListCatalog/ListCatalog';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await getCarCatalog();

        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    fetchCars();
  }, []);

  return (
    <>
      <Section>
        <Filter />
        {isLoading && Loading.arrows()}
        {itemsPerPage > 0 && <ListCatalog data={cars} />}
      </Section>
    </>
  );
};
export default Catalog;
