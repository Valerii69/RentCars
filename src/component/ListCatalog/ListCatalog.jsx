import { ListCatalogItems } from '../ListCatalogItem/ListCatalogItem';
import * as s from './ListCatalog.styled';

export const ListCatalog = ({ data }) => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const itemsToShow = cars.slice(0, endIndex);

  //   const loadMore = () => {
  //     setCurrentPage(prevPage => prevPage + 1);
  //   };

  return (
    <>
      <s.List>
        {data.map(car => (
          <s.ListItems key={car.id}>
            <ListCatalogItems car={car} />
          </s.ListItems>
        ))}
      </s.List>
      {/* {cars.length > endIndex && (
        <s.LoadMore onClick={loadMore}>Load more</s.LoadMore>
      )} */}
    </>
  );
};
