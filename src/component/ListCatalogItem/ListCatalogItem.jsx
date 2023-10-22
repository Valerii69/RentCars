import { useState } from 'react';
import Modal from 'component/Modal/Modal';
import * as s from './ListCatalogItem.styled';

import { CarDetails } from 'component/CarDetails/CarDetails';
import { ReactComponent as IconNoFavorite } from '../../icons/heart-normal.svg';
import { ReactComponent as IconFavorite } from '../../icons/heart-active.svg';
import { useFavorites } from 'hooks/useFavorites';
import { parseAddress } from 'component/utils/utils';

export const ListCatalogItems = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [, isFavorite, toggleFavorite] = useFavorites();

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };
  return (
    <s.Card>
      <s.Thumb>
        <s.Img src={car.img} alt="Car" />
      </s.Thumb>
      <s.IconContainer
        onClick={e => {
          e.stopPropagation();
          toggleFavorite(car.id);
        }}
      >
        {!isFavorite(car.id) && <IconNoFavorite />}
        {isFavorite(car.id) && <IconFavorite />}
      </s.IconContainer>
      <s.Title>
        <s.Name>
          {car.make} <s.AccentTitle>{car.model}</s.AccentTitle>, {car.year}
        </s.Name>
        <s.Price>{car.rentalPrice}</s.Price>
      </s.Title>
      <s.Info>
        {parseAddress(car.address).city} | {parseAddress(car.address).country} |{' '}
        {car.rentalCompany} | {car.type} | {car.mileage / 1000} |{' '}
        {car.accessories[2]}
      </s.Info>
      <s.ButtonLearnMore onClick={showModal}>Learn more</s.ButtonLearnMore>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <CarDetails car={car} />
        </Modal>
      )}
    </s.Card>
  );
};
