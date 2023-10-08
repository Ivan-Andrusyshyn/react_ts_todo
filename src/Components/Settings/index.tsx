import React, { useState } from "react";
import SidebarItem from "../SidebarItem";
import * as S from "./styles";
interface SidebarItemProps {
  name: string;
  icon: string;
  isActive: boolean;
}

const SettingsItem: React.FC<SidebarItemProps> = ({ isActive, icon }) => {
  const [show, setShow] = useState(false);
  const handleOpenList = () => {
    setShow(!show);
  };
  return (
    <S.SettingsContainer onClick={handleOpenList} isActive={show}>
      <SidebarItem icon={icon} name="Settings" isActive={show} />
      <S.ListSettings isActive={show}>
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
