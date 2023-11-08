import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  DropdownList,
  DropdownPriceList,
  Form,
  InputBrand,
  InputMilea,
  InputPrice,
  LabelBox,
  Text,
  // ChevronDown,
  // ChevronUp,
} from './Filter.styled';

import { ReactComponent as DownChevron } from '../../icons/chevron-down.svg';
import { ReactComponent as UpChevron } from '../../icons/chevron-up.svg';

const baseURL = 'https://648ca3ae8620b8bae7ed2c50.mockapi.io/adverts';

export const Filter = () => {
  const [cars, setCars] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [setSelectedCar] = useState(null);

  const [inputPriceValue, setInputPriceValue] = useState('');
  const [isListPriceOpen, setIsListPriceOpen] = useState(false);
  const [, setSelectedPriceCar] = useState(null);

  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(baseURL);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCars();
  }, []);

  const uniqueMakes = [...new Set(cars.map(car => car.make))];
  const uniquePrice = [...new Set(cars.map(car => car.rentalPrice))];

  const handleInputChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsListOpen(true);
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleCarSelect = carMake => {
    setInputValue(carMake);
    setSelectedCar(carMake);
    setIsListOpen(false);
  };

  const handleInputPriceChange = e => {
    e.preventDefault();
    setInputPriceValue(e.target.value);
    setIsListPriceOpen(true);
  };

  const togglePriceList = () => {
    setIsListPriceOpen(!isListPriceOpen);
  };

  const handleCarPriceSelect = rentalPrice => {
    setInputPriceValue(rentalPrice);
    setSelectedPriceCar(rentalPrice);
    setIsListPriceOpen(false);
  };

  const handleMileageFromChange = e => {
    e.preventDefault();
    setMileageFrom(e.target.value);
  };

  const handleMileageToChange = e => {
    e.preventDefault();
    setMileageTo(e.target.value);
  };

  const brandIcon = isListOpen ? (
    <svg src={DownChevron} alt="Chevron Down" width="20px" height="20px" />
  ) : (
    <svg src={UpChevron} alt="Chevron Up" width="20px" height="20px" />
  );
  const priceIcon = isListPriceOpen ? (
    <svg src={DownChevron} alt="Chevron Down" width="20px" height="20px" />
  ) : (
    <svg src={UpChevron} alt="Chevron Up" width="20px" height="20px" />
  );

  return (
    <>
      <Form>
        <label>
          <Text>Car brand</Text>
          <LabelBox>{' '}
            <InputBrand
              placeholder="Enter the text"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select type="select" onClick={toggleList}>
              {brandIcon}
            </select>{' '}
          </LabelBox>
        </label>
        {isListOpen && (
          <DropdownList>
            {uniqueMakes
              .filter(
                make =>
                  make &&
                  make.toLowerCase().startsWith(inputValue.toLowerCase())
              )
              .map((make, index) => (
                <li key={index} onClick={() => handleCarSelect(make)}>
                  {make}
                </li>
              ))}
          </DropdownList>
        )}
        <label>
          <Text>Price/ 1 hour</Text>
          <LabelBox>
            <InputPrice
              placeholder="To $"
              type="text"
              value={inputPriceValue}
              onChange={handleInputPriceChange}
            />
            <select type="select" onClick={togglePriceList}>
              {priceIcon}
            </select>
          </LabelBox>
        </label>
        {isListPriceOpen && (
          <DropdownPriceList>
            {uniquePrice
              .filter(
                rentalPrice =>
                  rentalPrice &&
                  rentalPrice
                    .toLowerCase()
                    .startsWith(inputPriceValue.toLowerCase())
              )
              .map((rentalPrice, index) => (
                <li
                  key={index}
                  onClick={() => handleCarPriceSelect(rentalPrice)}
                >
                  {rentalPrice}
                </li>
              ))}
          </DropdownPriceList>
        )}
        <div>
          <label htmlFor="carMileageFrom">
            <Text>Car mileage / km</Text>
            <LabelBox>
              <InputMilea
                type="text"
                name="carMileageFrom"
                placeholder="From"
                value={`${mileageFrom}`}
                onChange={handleMileageFromChange}
              />
              <InputMilea
                type="text"
                name="carMileageTo"
                placeholder="To"
                value={`${mileageTo}`}
                onChange={handleMileageToChange}
              />
            </LabelBox>
          </label>
        </div>
        <Button>Search</Button>
      </Form>
    </>
  );
};
