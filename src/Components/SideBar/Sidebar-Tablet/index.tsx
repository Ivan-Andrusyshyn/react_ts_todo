import React from "react";
import SideBar from "../SideBar";
import * as S from "./styles";
import PropsSidebarTablet from "./types";
const SidebarTablet: React.FC<PropsSidebarTablet> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <>
      {isSidebarOpen && (
        <S.Backdrop onClick={toggleSidebar} id="backdrop">
          <SideBar />
        </S.Backdrop>
      )}
    </>
  );
};
export default SidebarTablet;
