import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 200px;
`;

export const LabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  font-family: Manrope;
  color: rgba(138, 138, 137, 1);
`;

export const InputBrand = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: Manrope;
  color: rgba(18, 20, 23, 1);

  height: 48px;
  width: 224px;
  border-radius: 14px;
  border: 1px solid rgba(247, 247, 251, 1);
`;
export const InputPrice = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: Manrope;
  color: rgba(18, 20, 23, 1);

  height: 48px;
  width: 125px;
  border-radius: 14px;
  border: 1px solid rgba(247, 247, 251, 1);
`;

export const InputMilea = styled.input`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  font-family: Manrope;
  color: rgba(18, 20, 23, 1);

  height: 48px;
  width: 160px;
  border-radius: 14px;
  border: 1px solid rgba(247, 247, 251, 1);
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 136px;
  height: 48px;
  top: 20px;
  left: 20px;
  border-radius: 12px;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
  background-color: rgba(52, 112, 255, 1);
  padding: 14px, 44px, 14px, 44px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgba(11, 68, 205, 1);
    cursor: pointer;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  z-index: 10;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: scroll;
  width: 200px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 235px;
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  font-family: Manrope;
  color: rgba(18, 20, 23, 0.2);
`;

export const DropdownPriceList = styled.ul`
  position: absolute;
  z-index: 10;
  border: 1px solid #ccc;
  max-height: 150px;
  overflow-y: scroll;
  width: 100px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 235px;
  margin-left: 300px;
  list-style-type: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  font-family: Manrope;
  color: rgba(18, 20, 23, 0.2);
`;
