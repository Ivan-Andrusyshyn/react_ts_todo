import styled, { css } from "styled-components";
interface ContainerProps {
  isActive: boolean;
}

export const SettingsContainer = styled.div<ContainerProps>`
  height: 50px;
  height: 200px;
  transition: height 0.3s linear;
  ${(props) =>
    props.isActive &&
    css`
      background: #f5f5f5;
    `};
  ${(props) =>
    !props.isActive &&
    css`
      height: 70px;
    `};
`;
export const ListSettings = styled.ul<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 0;
  list-style: none;
  max-height: 200px;
  opacity: 1;
  overflow: hidden;
  transition: max-height 0.3s ease-out, opacity 0.4s ease-out;
  padding-left: 15px;
  ${(props) =>
    !props.isActive &&
    css`
      max-height: 0;
      opacity: 0;
    `};
`;
export const ListItem = styled.li`
  width: 100%;
`;
export const Subtitle = styled.p`
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.3;
  width: 100%;
`;
