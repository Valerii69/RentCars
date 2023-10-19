import {
  Title,
  Box,
  Description,
  Headline,
  Advantages,
  Item,
  Image,
  FlexContainer,
} from './Home.styled';

import carImage from '../images/cool-sports-car.png';

const Home = () => {
  return (
    <>
      <Box>
        <Title>Your Key to Freedom on Ukrainian Roads</Title>
        <Description>
          Experience the freedom of exploring Ukraine at your own pace with our
          car rental app. Discover picturesque landscapes, vibrant cities, and
          hidden gems with ease. Your adventure begins here.
        </Description>
        <Headline>The World`s Best Luxury Car Deals</Headline>
        <FlexContainer>
          <Image>
            <img src={carImage} alt="" width="450" height="300"></img>
          </Image>
          <Advantages>
            <Item>
              Are you ready to explore Ukraine like never before? Say goodbye to
              the limitations of public transportation and embrace the freedom
              of the open road with our top-notch car rental services! At{' '}
              <span className="text-accent-color">RentCars</span>, we`re
              dedicated to making your travel experiences unforgettable.
            </Item>

            <Item>
              Гнучкі умови оренди: Ми пропонуємо різні опції оренди, включаючи
              добову, тижневу та тривалу оренду, щоб задовольнити ваші потреби.
            </Item>
          </Advantages>
        </FlexContainer>
        <Description>
          At RentCars, we`re not just a car rental service; we`re your ticket to
          unforgettable experiences, adventures, and memories waiting to be
          created. Whether you`re a solo traveler, exploring with family and
          friends, or on a business trip, we have the perfect vehicle to suit
          your needs.
        </Description>
      </Box>
    </>
  );
};
export default Home;
