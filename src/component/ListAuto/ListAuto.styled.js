import styled from "styled-components";

export const Collection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;

  margin-bottom: 100px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: inline-block;
  width: 274px;
  height: 426px;
  text-decoration: none;
  position: relative;

  margin-right: 29px;
  /* &:nth-child(4n) {
    margin-right: 0;
  } */
  margin-bottom: 50px;

  font-family: Manrope;
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
  margin-bottom: 8px;
  word-spacing: 4px;
`;

export const Decor = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const Price = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
`;

export const Info = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  word-spacing: 3px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 274px;
  height: 44px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: rgba(52, 112, 255, 1);
  padding: 12px, 99px, 12px, 99px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    cursor: pointer;
  }
`;

export const LoadMore = styled.a`
  display: flex;
  justify-content: center;
  border: none;
  color: rgba(52, 112, 255, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
  text-decoration: underline;
  margin-bottom: 30px;
  margin-top: 50px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgba(11, 68, 205, 1);
    cursor: pointer;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 2;
`;
