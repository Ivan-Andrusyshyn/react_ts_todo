import styled, { css } from "styled-components";
interface propsShowDel {
  showDelete: boolean;
}
export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div<propsShowDel>`
  width: 25vw;
  background: white;
  border-radius: 16px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateY(0);
  transition: transform 0.3s linear;
  ${(props) =>
    props.showDelete &&
    css`
      transform: translateY(-100%);
    `};
`;

export const Text = styled.p`
  font-size: 18px;
  color: #555;
  wrap: wrap;
  text-align: center;
  padding: 10px;
  @media screen and (min-width: 920px) {
    font-size: 20px;
  }
`;

export const Buttons = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CancelButton = styled.button`
  background: white;
  border: 1px solid blue;
  color: blue;
  width: 70px;
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
  margin: 8px;
  cursor: pointer;
  transition: border, background-color, font-weight, 0.25s linear;

  &:hover {
    border: 2px solid blue;
    font-weight: 500;
    background: #eee;
  }
  @media screen and (min-width: 920px) {
    width: 120px;
    font-size: 20px;
  }
`;

export const DeletButton = styled.button`
  background: white;
  border: 1px solid red;
  color: red;
  width: 70px;
  height: 40px;
  border-radius: 8px;
  margin: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: border, background-color, font-weight, 0.25s linear;
  &:hover {
    border: 2px solid red;
    font-weight: 500;
    background-color: #eee;
  }
  @media screen and (min-width: 920px) {
    width: 120px;
    font-size: 20px;
  }
`;
