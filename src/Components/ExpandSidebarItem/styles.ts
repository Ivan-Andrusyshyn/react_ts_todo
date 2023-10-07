import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

interface ContainerProps {
  isActive: boolean;
}

export const Name = styled.h3`
  font-size: 16px;
  font-weight: 500;
`;
export const OuterContainer = styled.div<ContainerProps>`
  height: auto;
  width: 15vw;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  color: #777;
  font-weight: 100;
  margin: 4px 0;

  border-radius: 8px;

  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
    `};
  margin: 0;
`;

export const Container = styled.div<ContainerProps>`
  height: 40px;
  width: 15vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: #777;
  transition: height 0.2s linear;
  font-weight: 100;
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
      height: 50px;
    `};
  margin: 0;

  &:hover {
    cursor: pointer;
    ${(props) =>
      props.isActive
        ? css`
            background: #f5f5f5;
          `
        : css`
            background: #fafafa;
          `};
  }
`;

export const Icon = styled.img`
  width: 20px;
  margin: 8px 16px;
`;

export const Arrow = styled.img<ContainerProps>`
  width: 14px;
  margin: 8px 16px;

  ${(props) =>
    props.isActive &&
    css`
      transform: rotate(180deg);
    `};
  margin: 4px 24px;
`;

export const CatArea = styled.div<ContainerProps>`
  display: flex;
  width: 15vw;
  height: auto;
  background: #f5f5f5;
  border-radius: 8px;
  flex-direction: column;
  padding-bottom: 8px;
  margin-left: 5px;
  transition: height 0.2s linear;
  ${(props) =>
    !props.isActive &&
    css`
      display: none;
      height: 0;
    `};
`;

export const AddArea = styled.button`
  height: 20px;
  margin: 4px 0 4px 15px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  position: relative;
`;
export const ColorInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
export const Backdrop = styled.div`
  background-color: transparent;
  z-index: 999999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
`;
export const FormModal = styled.div`
  background-color: #fff;
  position: absolute;
  width: 180px;
  border-radius: 6px;
  z-index: 222;
  left: 150px;
  top: 300px;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
export const CategoryForm = styled.form`
  margin-top: 10px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 5px;
  width: 100%;
`;
export const ErrorText = styled.p`
  font-size: 12px;
  color: red;
`;
export const ColorInput = styled.input`
  border-radius: 4px;
`;
export const TitleInput = styled.input`
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
`;
export const FormBtn = styled.button`
  width: 75px;
  cursor: pointer;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const AddText = styled.p`
  font-size: 16px;
  color: #ccc;
  margin-left: 8px;
  font-weight: 400;
  transition: color 0.25s linear;
  &:hover {
    color: #bdbdbd;
  }
`;

export const AddIcon = styled.img`
  height: 16px;
`;
