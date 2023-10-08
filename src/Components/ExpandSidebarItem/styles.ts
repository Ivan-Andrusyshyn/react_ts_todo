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
  height: 50px;
  width: 15vw;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  color: #777;
  font-weight: 100;
  margin: 4px 0;
  transition: height 0.2s linear;

  border-radius: 8px;
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
      height: 200px;
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
  font-weight: 100;
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
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
  transition: transform 0.3s linear;
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
  border-radius: 8px;
  flex-direction: column;
  padding-bottom: 8px;
  margin-left: 5px;
  max-height: 200px;
  opacity: 1;
  overflow: hidden;
  overflow-y: scroll;
  transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
  opacity: 1;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ${(props) =>
    !props.isActive &&
    css`
      max-height: 0;
      opacity: 0;
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
  width: 200px;
  border-radius: 6px;
  z-index: 222;
  left: 180px;
  top: 330px;
  display: flex;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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
  width: 100%;
  gap: 20px;
  justify-content: center;
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
