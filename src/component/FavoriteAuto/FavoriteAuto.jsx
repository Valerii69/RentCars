// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { CarDetails } from '../CarDetails_1/CarDetails';
// import { parseAddress } from 'component/utils/utils';
// import * as s from '../ListAuto/ListAuto.styled';
// import activeIcon from '../../icons/active.svg';
// import { useFavorites } from '../../hooks/useFavorites';
// import { List } from './FavoriteAuto.styled';
// import { BASE_URL } from 'api/adverts';

// export const FavoriteAuto = () => {
//   const [favorites, , removeFavorite] = useFavorites();
//   const [favoriteCars, setFavoriteCars] = useState([]);
//   const [selectedCar, setSelectedCar] = useState(null);

//   useEffect(() => {
//     const fetchFavoriteCars = async () => {
//       try {
//         const promises = favorites.map(id => axios.get(`${BASE_URL}/${id}`));
//         const responses = await Promise.all(promises);
//         const validCars = responses.map(response => response.data);

//         setFavoriteCars(validCars);
//       } catch (error) {
//         console.error('Error fetching cars:', error);
//       }
//     };

//     fetchFavoriteCars();
//   }, [favorites]);

//   const openModal = car => {
//     setSelectedCar(car);
//   };

//   const closeModal = () => {
//     setSelectedCar(null);
//   };

//   return (
//     <>
//       <s.Collection>
//         <List>
//           {favoriteCars.map(car => {
//             return (
//               <s.Item
//                 key={car.id}
//                 onClick={() => {
//                   openModal(car);
//                 }}
//               >
//                 <s.Img src={car.img} alt="" width="274" height="268" />
//                 <s.IconContainer
//                   onClick={e => {
//                     e.stopPropagation();
//                     removeFavorite(car.id);
//                   }}
//                 >
//                   <img src={activeIcon} alt="icon" />
//                 </s.IconContainer>
//                 <s.Title>
//                   <s.Name>
//                     {car.make} <s.Decor>{car.model}</s.Decor>, {car.year}
//                   </s.Name>
//                   <s.Price>{car.rentalPrice}</s.Price>
//                 </s.Title>
//                 <s.Info>
//                   {parseAddress(car.address).city} |{' '}
//                   {parseAddress(car.address).country} | {car.rentalCompany} |{' '}
//                   {car.type} | {car.mileage / 1000} | {car.accessories[2]}
//                 </s.Info>
//                 <s.Button>Learn more</s.Button>
//               </s.Item>
//             );
//           })}
//         </List>
//         {selectedCar && <CarDetails car={selectedCar} onClose={closeModal} />}
//       </s.Collection>
//     </>
//   );
// };
