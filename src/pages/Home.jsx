import { useState } from 'react';
import {
  Title,
  Box,
  Description,
  Span,
  FlexContainer,
  SocialContainer,
  SocialArray,
  Button,
} from './Home.styled';
import { Link } from 'react-router-dom';
import { ReactComponent as Instagram } from '../../src/icons/instagram.svg';
import { ReactComponent as InstagramHover } from '../../src/icons/instagramHover.svg';
import { ReactComponent as Telegram } from '../../src/icons/telegram.svg';
import { ReactComponent as TelegramHover } from '../../src/icons/telegramHover.svg';

const Home = () => {
 const [isInstagramHovered, setIsInstagramHovered] = useState(false);
 const [isTelegramHovered, setIsTelegramHovered] = useState(false);

  return (
    <>
      <Box>
        <FlexContainer>
          <Title>Your choice for freedom on the roads</Title>
          <Description>
            At <Span>RentCars</Span>, we are not just a car rental service; we
            are your ticket to unforgettable experiences, adventures, and
            memories waiting to be created. Whether you are a solo traveler,
            exploring with family and friends, or on a business trip, we have
            the perfect vehicle to suit your needs.
          </Description>
          <Link to="/catalog">
            <Button>Learn more</Button>{' '}
          </Link>
          <SocialContainer>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialArray
                onMouseEnter={() => setIsInstagramHovered(true)}
                onMouseLeave={() => setIsInstagramHovered(false)}
              >
                {isInstagramHovered ? <InstagramHover /> : <Instagram />}
              </SocialArray>
            </a>

            {/* Посилання для Telegram */}
            <a
              href="https://www.telegram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialArray
                onMouseEnter={() => setIsTelegramHovered(true)}
                onMouseLeave={() => setIsTelegramHovered(false)}
              >
                {isTelegramHovered ? <TelegramHover /> : <Telegram />}
              </SocialArray>
            </a>
          </SocialContainer>
        </FlexContainer>
      </Box>
    </>
  );
};
export default Home;
