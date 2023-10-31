import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import React from "react";
import PropsBurgerMenu from "./types";

const BurgerMenu: React.FC<PropsBurgerMenu> = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  return (
    <S.BurgerWrapper
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      id="burger_menu"
    >
      <FontAwesomeIcon icon={faBars} size="xl" />
    </S.BurgerWrapper>
  );
};
export default BurgerMenu;
