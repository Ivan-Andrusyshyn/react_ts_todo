import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import DeleteModal from "../../Components/Modals/Task-modals/DeleteModal";
import AddModal from "../../Components/Modals/Task-modals/AddModal";

import * as S from "./styles";
import { DeleteContext } from "../../Contexts/delete_edit_Context";
import { DeleteType } from "../../Contexts/typesContext/delete_edit_Type";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/typesContext/addType";
import { useMediaQuery } from "react-responsive";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import CategorieMain from "../../Components/CategorieMain/CategorieList";
import SideBar from "../../Components/SideBar/SideBar";
import SidebarTablet from "../../Components/SideBar/Sidebar-Tablet";
import BurgerMenu from "../../Components/SideBar/BurgerMenu";
import EditModal from "../../Components/Modals/Task-modals/EditModal";

const CategoriePage: React.FC = () => {
  const { name } = useParams<string>();

  const navigate = useNavigate();
  const { categList } = useContext(CategoriesContext) as CategorieContextType;

  const { showDelete, showEdit } = useContext(DeleteContext) as DeleteType;
  const { showAdd } = useContext(AddContext) as AddType;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (categList) {
      const nameNav = categList[0]?.name;
      if (nameNav) {
        navigate("/categorie/" + nameNav);
      } else if (categList.length <= 0) {
        navigate("/categorie/");
      }
    }
  }, []);

  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 960 });

  const toggleSidebar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.id === "backdrop") {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <S.Page>
      <BurgerMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <SidebarTablet
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      {!isTablet && <SideBar />}

      <CategorieMain name={name} />

      {showEdit && <EditModal />}
      {showDelete && <DeleteModal />}
      {showAdd && <AddModal />}
    </S.Page>
  );
};

export default CategoriePage;
