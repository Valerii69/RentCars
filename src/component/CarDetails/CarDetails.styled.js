import styled from 'styled-components';
<<<<<<< HEAD
// import { theme } from 'stylesheet/styled';
import noImageIcon from '../../images/auto_not_available.png';
=======
import noImageAuto from '../../images/noImageAuto.png';
>>>>>>> 725a5be374ee80533059298915eb2fa141e35bb1

export const Details = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Thumb = styled.div`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  margin-bottom: 14px;
<<<<<<< HEAD
  background-image: url(${noImageIcon});
=======
  background-image: url(${noImageAuto});
>>>>>>> 725a5be374ee80533059298915eb2fa141e35bb1
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Img = styled.img`
  border-radius: 14px;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 8px;
  word-spacing: 3px;
`;

export const AccentTitle = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  word-spacing: 3px;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.primary};
  word-spacing: 3px;
  margin-bottom: 24px;
`;

export const Chapter = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.primary};
  word-spacing: 3px;
  margin-bottom: 8px;
`;

export const Conditions = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.primary};
  word-spacing: 3px;

  display: flex;
  padding-left: 14px;
`;

export const Box = styled.span`
  margin-right: 20px;
  margin-bottom: 8px;
`;

export const Accent = styled.span`
  font-weight: 600;
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.accent};
  word-spacing: 3px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  width: 168px;
  height: 44px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: ${({ theme }) => theme.colors.accent};
<<<<<<< HEAD
  transition: background-color 250ms
    ${({ theme }) => theme.timingFunction.cubicBezier};
=======
  transition: background-color 250ms ${({ theme }) => theme.timingFunction.cubicBezier};
>>>>>>> 725a5be374ee80533059298915eb2fa141e35bb1

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.accentHover};
    cursor: pointer;
  }
`;

export const LinkToContact = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: ${({ theme }) => theme.colors.white};
  word-spacing: 3px;
  text-decoration: none;
<<<<<<< HEAD
`;
export const Message = styled.h2`
  font-size: 32px;
  font-weight: 600;
  padding: 20px 0;
  text-align: center;
`;
=======
`;
>>>>>>> 725a5be374ee80533059298915eb2fa141e35bb1
