import { useState } from 'react';
import { ListCatalogItems } from '../ListCatalogItem/ListCatalogItem';
import * as s from './ListCatalog.styled';

export const ListCatalog = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(0, endIndex);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <s.List>
        {itemsToShow.map(car => (
          <s.ListItems key={car.id}>
            <ListCatalogItems car={car} />
          </s.ListItems>
        ))}
      </s.List>
      {data.length > endIndex && (
        <s.LoadMore onClick={loadMore}>Load more</s.LoadMore>
      )}
    </>
  );
};
