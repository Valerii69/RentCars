import axios from 'axios';
import { Filter } from '../component/Filter/Filter';

// import { ListAuto } from '../component/ListAuto/ListAuto';
import { useState, useEffect } from 'react';
// import { getCarCatalog } from 'api/adverts';
import { Section } from 'component/Section/Section';
import { ListCatalog } from '../component/ListCatalog/ListCatalog';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';

const baseURL = 'https://653015866c756603295e3ada.mockapi.io/adverts/';

const Catalog = () => {
  const [cars, setCars] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(baseURL);

        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
      //  finally {
      // setIsLoading(false);
      //   Loading.remove();
      // }
    };
    fetchCars();
  }, []);

  return (
    <>
      <Section title="Catalog page">
        <Filter />
        {/* {isLoading && Loading.arrows()} */}
        {itemsPerPage > 0 && <ListCatalog data={cars} />}
      </Section>
    </>
  );
};
export default Catalog;
