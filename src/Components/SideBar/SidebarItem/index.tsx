import React from "react";
import * as S from "./styles";
import { TypesPropsSideBarItem } from "../types/types";

const SidebarItem: React.FC<TypesPropsSideBarItem> = ({
  name,
  icon,
  isActive,
}) => {
  return (
    <S.Container isActive={isActive} data-testid="SidebarItem">
      <S.Icon src={icon} />
      <S.Name>{name}</S.Name>
    </S.Container>
  );
};

export default SidebarItem;
