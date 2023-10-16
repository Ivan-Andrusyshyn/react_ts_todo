import React, { useContext, useState } from "react";

import { useParams } from "react-router-dom";

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
import SideBar from "../Home/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import EditModal from "../../Components/EditModal/EditModal";

const CategoriePage: React.FC = () => {
  const { name } = useParams<string>();

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

  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <S.Main>
        <S.Header>{name}</S.Header>
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

export default CategoriePage;
