import styled, { css } from "styled-components";
interface ContainerProps {
  isActive: boolean;
}
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 300px;
  background: white;
  border-radius: 16px;
  opacity: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 8px;
  @media screen and (min-width: 920px) {
    width: 350px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid blue;
  color: blue;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px;
  width: 90px;
  transition: border, background-color, font-weight, 0.25s linear;

  &:hover {
    border: 2px solid blue;
    font-weight: 500;
    background: #eee;
  }
  font-size: 14px;
  @media screen and (min-width: 920px) {
    width: 120px;
    font-size: 20px;
  }
`;

export const AddButton = styled.button`
  background: white;
  border: 1px solid green;
  color: green;
  height: 40px;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: border, background-color, font-weight, 0.25s linear;
  width: 90px;
  &:hover {
    border: 2px solid green;
    font-weight: 500;
    background: #eee;
  }
  @media screen and (min-width: 920px) {
    width: 120px;
    font-size: 20px;
  }
`;
export const TitleInput = styled.input`
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  width: 260px;
  color: #555;
  box-sizing: border-box;
  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
    opacity: 0.6;
    font-size: 18px;
  }
`;

export const Select = styled.select`
  width: 260px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 20px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  color: #555;
  @media screen and (min-width: 920px) {
    font-size: 20px;
  }
`;
export const DatePicker = styled.span<ContainerProps>`
  display: flex;
  color: #777;
  padding: 10px;
  border: 1px solid #777;
  width: 240px;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
  align-items: center;
  transition: color, border 0.3s linear;
  ${(props) =>
    props.isActive &&
    css`
      color: #bdbdbd;
      border: 1px solid #bedbb0;
    `};
`;
export const ModalOverlay = styled.div`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;
export const Arrow = styled.img<ContainerProps>`
  width: 14px;
  cursor: pointer;
  transition: transform 0.3s linear;
  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(180deg);
    `};
  margin: 4px 24px;
`;
