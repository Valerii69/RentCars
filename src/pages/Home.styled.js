import styled from 'styled-components';
import carImage from '../images/bgrLogo.webp';


export const Box = styled.div`
  text-align: center;
  display: flex;
  margin-top: 15px;
  margin-bottom: 30px;
  justify-content: center;
`;

export const FlexContainer = styled.section`
  display: flex;
  padding: 50px 50px;
  justify-content: space-between;
  max-width: 1440px;
  height: 800px;
  flex-direction: column;

  align-items: center;
  background-image: url(${carImage});
  background-size: cover;
  background-position: center left;
  border-radius: 24px;
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: -1;
    display: block;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 1.33;
 

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 30px;
  word-spacing: 3px;
`;

export const Description = styled.p`
  font-weight: 500;
  display: inline-block;
  font-size: 26px;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.white};

  margin-bottom: 30px;
  word-spacing: 3px;
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 274px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 900;
  font-size: 16px;
  line-height: 1.43;
  background-color: rgba(52, 112, 255, 1);
  padding: 12px, 99px, 12px, 99px;
  margin-bottom: 30px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 250ms cubic-bezier(0.2, 0.2, 0.2, 0.2);
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    -webkit-box-shadow: 5px 5px 7px 1px ${({ theme }) => theme.colors.white};
    -moz-box-shadow: 5px 5px 7px 1px ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.white};
    cursor: pointer;
    text-decoration: none;
  }
`;


export const Span = styled.span`
  color: ${({ theme }) => theme.colors.colorCar};
  font-size: 30px;
  line-height: 1.33;
`;

export const Headline = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.43;
  color: rgba(18, 20, 23, 1);
  word-spacing: 3px;
  /* margin-bottom: 8px; */
`;
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
flex-direction:row;
gap:20px;
`;

export const SocialArray = styled.div`
  margin-bottom: 20px;
  width: 44px;
  height: 44px;

  align-items: center;
  border-radius: 50%;
   transition: box-shadow 250ms cubic-bezier(0.2, 0.2, 0.2, 0.2); /* Плавний перехід для тіні */

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px 5px ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;



export const Advantages = styled.ul`
  list-style: square;
  text-align: left;
`;

export const Item = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.43;
  color: rgba(18, 20, 23, 1);
  word-spacing: 3px;
  margin-bottom: 10px;
`;
