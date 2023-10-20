import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 1);
  padding: 40px;
  border-radius: 24px;
  z-index: 3;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  z-index: 4;
`;

export const Img = styled.img`
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const ModalContent = styled.div`
  width: 461px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

export const Title = styled.div`
  display: inline-block;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: rgba(18, 20, 23, 1);
  margin-bottom: 8px;
  word-spacing: 3px;
`;

export const Decor = styled.span`
  color: rgba(52, 112, 255, 1);
`;

export const Info = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  word-spacing: 3px;
  margin-bottom: 14px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(18, 20, 23, 1);
  word-spacing: 3px;
  margin-bottom: 24px;
`;

export const Headline = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(18, 20, 23, 1);
  word-spacing: 3px;
  margin-bottom: 8px;
`;

export const Conditions = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 1);
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
  color: rgba(52, 112, 255, 1);
  word-spacing: 3px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  width: 168px;
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

export const LinkToTelNumber = styled.a`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  color: rgba(255, 255, 255, 1);
  word-spacing: 3px;
  text-decoration: none;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  border: none;
  background: transparent;
  padding: 9px;
  z-index: 3;
  cursor: pointer;
`;
