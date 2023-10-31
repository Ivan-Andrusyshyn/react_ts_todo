import React from "react";
import SideBar from "../SideBar";
import * as S from "./styles";
import { PropsSidebarTablet } from "../types/types";
const SidebarTablet: React.FC<PropsSidebarTablet> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <>
      {isSidebarOpen && (
        <S.Backdrop onClick={toggleSidebar} id="backdrop" data-testid="sidebar">
          <SideBar />
        </S.Backdrop>
      )}
    </>
  );
};
export default SidebarTablet;
