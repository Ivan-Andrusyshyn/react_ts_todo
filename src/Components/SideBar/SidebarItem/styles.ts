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

export const Container = styled.div<ContainerProps>`
  height: 50px;
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
  margin: 4px 0;

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
