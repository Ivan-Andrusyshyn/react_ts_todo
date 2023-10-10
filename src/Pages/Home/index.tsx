import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import TaskCard from "../../Components/TaskCard";
import AddTask from "../../Components/AddTask";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/typesContext/taskType";
import FilterTag from "../../Components/FilterTag";
import Filter from "../../Img/filter.svg";
import { DeleteContext } from "../../Contexts/delete_edit_Context";
import { DeleteType } from "../../Contexts/typesContext/delete_edit_Type";
import DeleteModal from "../../Components/DeleteModal";
import AddModal from "../../Components/AddModal";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/typesContext/addType";
import AuthContext from "../../Contexts/authContext";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { AuthType } from "../../Contexts/typesContext/authType";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideBar from "./SideBar";
import EditModal from "../../Components/EditModal/EditModal";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const { taskList, doneTasks, notDoneTasks } = useContext(
    TaskListContext
  ) as TaskListType;
  const { userData, isLoading } = useContext(AuthContext) as AuthType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const navigate = useNavigate();

  const { showDelete, showEdit } = useContext(DeleteContext) as DeleteType;
  const { showAdd } = useContext(AddContext) as AddType;
  const [listToDisplay, setListToDisplay] = useState(0);
  const listOfLists = [taskList, doneTasks, notDoneTasks];
  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.id === "backdrop") {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  useEffect(() => {
    if (categList) {
      const nameNav = categList[0]?.name;
      if (nameNav) {
        navigate("/categorie/" + nameNav);
      }
    }
  }, []);
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 920 });
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
      <S.Main>
        <S.Header>All your tasks</S.Header>
        <S.TitleAndFilter>
          <S.Title onClick={handleDone}>Tasks </S.Title>
          <S.FilterField>
            <div onClick={handleAll}>
              <FilterTag name="All" active={allActive} />
            </div>
            <div onClick={handleDone}>
              <FilterTag name="Done" active={doneActive} />
            </div>
            <div onClick={handleNotDone}>
              <FilterTag name="Not done" active={notDoneActive} />
            </div>
            <S.FilterIcon src={Filter} />
          </S.FilterField>
        </S.TitleAndFilter>
        {listOfLists[listToDisplay].map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            name={task.title}
            list={task.categorie}
            color={task.color}
            done={task.done}
            date={task.date}
          />
        ))}
        <AddTask></AddTask>
      </S.Main>
      {showEdit && <EditModal />}
      {showDelete && <DeleteModal />}
      {showAdd && <AddModal />}
    </S.Page>
  );
};

export default Home;
