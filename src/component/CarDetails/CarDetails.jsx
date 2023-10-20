import {
  Accent,
  Box,
  Button,
  ButtonClose,
  Conditions,
  Decor,
  Description,
  Headline,
  Img,
  Info,
  LinkToTelNumber,
  Modal,
  ModalBackdrop,
  ModalContent,
  Title,
} from "./CarDetails.styled";
import { createPortal } from "react-dom";
import { useEffect } from "react";
import closeIcon from "../../images/close_cross_icon.png";

const modalRoot = document.querySelector("#modal-root");

const phoneNumber = "+380730000000";

export const CarDetails = ({ car, onClose }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleClickBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <>
      <ModalBackdrop onClick={handleClickBackdrop}>
        <Modal key={car.id}>
          <ButtonClose onClick={onClose}>
            <img src={closeIcon} alt="" width="24" height="24" />
          </ButtonClose>
          <ModalContent>
            <Img src={car.img} alt="" width="461" height="248" />

            <Title>
              {car.make} <Decor>{car.model}</Decor>, {car.year}
            </Title>
            <Info>
              <div>
                {car.address} | id: {car.id} | year: {car.year} | Type:{" "}
                {car.type}
              </div>
              <div>
                Fuel Consumption: {car.fuelConsumption} | Engine Size:
                {car.engineSize}
              </div>
            </Info>
            <Description>{car.description}</Description>
            <Headline>Accessories and functionalities:</Headline>
            <Info>
              <div>
                {car.accessories[0]} | {car.accessories[1]} |{" "}
                {car.accessories[2]}
              </div>
              <div>
                {car.functionalities[0]} | {car.functionalities[1]} |
                {car.functionalities[2]}
              </div>
            </Info>
            <Headline>Rental Conditions: </Headline>
            <Conditions>
              <Box>
                Minimum age :<Accent>{car.rentalConditions[0]}</Accent>
              </Box>
              <Box>{car.rentalConditions[1]}</Box>
            </Conditions>
            <Conditions>
              <Box>{car.rentalConditions[2]}</Box>
              <Box>
                Mileage: <Accent>{(car.mileage / 1000).toFixed(3)}</Accent>
              </Box>
              <Box>
                Price: <Accent>{car.rentalPrice}</Accent>
              </Box>
            </Conditions>
            <Button>
              <LinkToTelNumber href={`tel:${phoneNumber}`}>
                Rental car
              </LinkToTelNumber>
            </Button>
          </ModalContent>
        </Modal>
      </ModalBackdrop>
    </>,
    modalRoot
  );
};
