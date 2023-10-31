import React, { useState } from "react";
import * as S from "./styles";
import SidebarItem from "../SidebarItem";
import { SidebarItemSettingsProps } from "../types/types";

const SettingsItem: React.FC<SidebarItemSettingsProps> = ({
  isActive,
  icon,
  name,
}) => {
  const [show, setShow] = useState(false);
  const handleOpenList = () => {
    setShow(!show);
  };
  return (
    <S.SettingsContainer
      onClick={handleOpenList}
      isActive={show}
      data-testid="settingsWrapper"
    >
      <SidebarItem icon={icon} name={name} isActive={show} />
      <S.ListSettings isActive={show} data-testid="listSettings">
        <S.ListItem>
          <S.Subtitle>Settings 1</S.Subtitle>
        </S.ListItem>

        <S.ListItem>
          <S.Subtitle>Settings 2</S.Subtitle>
        </S.ListItem>
        <S.ListItem>
          <S.Subtitle>Settings 3</S.Subtitle>
        </S.ListItem>
      </S.ListSettings>
    </S.SettingsContainer>
  );
};
export default SettingsItem;
