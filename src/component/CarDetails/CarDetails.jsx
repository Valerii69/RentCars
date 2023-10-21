import * as s from './CarDetails.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import closeIcon from '../../images/close_cross_icon.png';
import { parseAddress } from 'component/utils/utils';

const modalRoot = document.querySelector('#modal-root');

const phoneNumber = '+380730000000';

export const CarDetails = ({ car, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <s.ModalBackdrop onClick={handleClickBackdrop}>
        <s.Modal key={car.id}>
          <s.ButtonClose onClick={onClose}>
            <img src={closeIcon} alt="" width="24" height="24" />
          </s.ButtonClose>
          <s.ModalContent>
            <s.Img src={car.img} alt="" width="461" height="248" />
            <s.Title>
              {car.make} <s.Decor>{car.model}</s.Decor>, {car.year}
            </s.Title>
            <s.Info>
              <div>
                {parseAddress(car.address).city} |{' '}
                {parseAddress(car.address).country} | {car.rentalCompany} |{' '}
                {car.type} | {car.mileage / 1000} | {car.accessories[2]}
              </div>
              <div>
                Fuel Consumption: {car.fuelConsumption} | Engine Size:
                {car.engineSize}
              </div>
            </s.Info>
            <s.Description>{car.description}</s.Description>
            <s.Headline>Accessories and functionalities:</s.Headline>
            <s.Info>
              <div>
                {car.accessories[0]} | {car.accessories[1]} |{' '}
                {car.accessories[2]}
              </div>
              <div>
                {car.functionalities[0]} | {car.functionalities[1]} |
                {car.functionalities[2]}
              </div>
            </s.Info>
            <s.Headline>Rental Conditions: </s.Headline>
            <s.Conditions>
              <sBox>
                Minimum age :<s.Accent>{car.rentalConditions[0]}</s.Accent>
              </sBox>
              <s.Box>{car.rentalConditions[1]}</s.Box>
            </s.Conditions>
            <s.Conditions>
              <s.Box>{car.rentalConditions[2]}</s.Box>
              <s.Box>
                Mileage: <s.Accent>{(car.mileage / 1000).toFixed(3)}</s.Accent>
              </s.Box>
              <s.Box>
                Price: <s.Accent>{car.rentalPrice}</s.Accent>
              </s.Box>
            </s.Conditions>
            <s.Button>
              <s.LinkToTelNumber href={`tel:${phoneNumber}`}>
                Rental car
              </s.LinkToTelNumber>
            </s.Button>
          </s.ModalContent>
        </s.Modal>
      </s.ModalBackdrop>
    </>,
    modalRoot
  );
};
