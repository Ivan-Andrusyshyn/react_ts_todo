import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import DeleteModal from "../../Components/Modals/Task-modals/DeleteModal";
import AddModal from "../../Components/Modals/Task-modals/AddModal";
import EditModal from "../../Components/Modals/Task-modals/EditModal/EditModal";

import * as S from "./styles";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/typesContext/taskType";
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

const CategoriePage: React.FC = () => {
  const { name } = useParams<string>();
  const navigate = useNavigate();
  const { categList } = useContext(CategoriesContext) as CategorieContextType;

  const { taskList, doneTasks, notDoneTasks } = useContext(
    TaskListContext
  ) as TaskListType;
  const { showDelete, showEdit } = useContext(DeleteContext) as DeleteType;
  const { showAdd } = useContext(AddContext) as AddType;
  const [listToDisplay, setListToDisplay] = useState(0);
  const listOfLists = [
    taskList.filter((task) => task.categorie === name),
    doneTasks.filter((task) => task.categorie === name),
    notDoneTasks.filter((task) => task.categorie === name),
  ];
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
  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 960 });

  function handleAll() {
    setListToDisplay(0);
    setAllActive(true);
    setDoneActive(false);
    setNotDoneActive(false);
  }

  function handleDone() {
    setListToDisplay(1);
    setAllActive(false);
    setDoneActive(true);
    setNotDoneActive(false);
  }
  function handleNotDone() {
    setListToDisplay(2);
    setAllActive(false);
    setDoneActive(false);
    setNotDoneActive(true);
  }
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

      <CategorieMain
        name={name}
        handleDone={handleDone}
        handleAll={handleAll}
        handleNotDone={handleNotDone}
        allActive={allActive}
        doneActive={doneActive}
        notDoneActive={notDoneActive}
        listOfLists={listOfLists}
        listToDisplay={listToDisplay}
      />

      {showEdit && <EditModal />}
      {showDelete && <DeleteModal />}
      {showAdd && <AddModal />}
    </S.Page>
  );
};

export default CategoriePage;
