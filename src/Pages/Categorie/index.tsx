import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import * as S from "./styles";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/typesContext/taskType";
import { DeleteContext } from "../../Contexts/delete_edit_Context";
import { DeleteType } from "../../Contexts/typesContext/delete_edit_Type";
import DeleteModal from "../../Components/TaskModals/DeleteModal";
import AddModal from "../../Components/TaskModals/AddModal";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/typesContext/addType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import EditModal from "../../Components/TaskModals/EditModal/EditModal";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import CategorieMain from "./CategorieMain";
import SideBar from "../../Components/SideBar";
import AnimatedContainer from "../../Components/Animations/AnimationsComponents";

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
      <S.BurgerWrapper
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        id="burger_menu"
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </S.BurgerWrapper>
      {!isTablet && <SideBar />}
      {isSidebarOpen && (
        <S.Backdrop onClick={toggleSidebar} id="backdrop">
          <SideBar />
        </S.Backdrop>
      )}
      <S.MainWrapper>
        <AnimatedContainer>
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
        </AnimatedContainer>
      </S.MainWrapper>

      {showEdit && <EditModal />}
      {showDelete && <DeleteModal />}
      {showAdd && <AddModal />}
    </S.Page>
  );
};

export default CategoriePage;
