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
  width: 24vw;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  color: #777;
  font-weight: 100;
  margin: 4px 0;
  transition: height 0.3s linear;

  border-radius: 8px;
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
      height: 200px;
    `};
  margin: 0;
  @media screen and (min-width: 920px) {
    width: 15vw;
  }
`;

export const Container = styled.div<ContainerProps>`
  height: 40px;
  width: 24vw;
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
  @media screen and (min-width: 920px) {
    width: 15vw;
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
  width: 24vw;
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
  @media screen and (min-width: 920px) {
    width: 15vw;
  }
`;
