import styled from 'styled-components';
import carImage from '../images/bgrLogo.webp';

export const Box = styled.div`
  text-align: center;
  display: flex;
  margin-top: 15px;
  margin-bottom: 30px;
  justify-content: center;
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

// export const FlexContainer = styled.div`
//   margin-bottom: 20px;
//   display: flex;
// `;

export const FlexContainer = styled.section`
  display: flex;
  padding: 30px 30px;
  justify-content: space-evenly;
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
