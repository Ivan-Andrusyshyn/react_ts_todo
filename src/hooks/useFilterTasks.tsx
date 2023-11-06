import { useContext, useState } from "react";
import { TaskListType } from "../Contexts/typesContext/taskType";
import { TaskListContext } from "../Contexts/taskListContext";

const useFilterTasks = (name: string | undefined) => {
  const [allActive, setAllActive] = useState(true);
  const [doneActive, setDoneActive] = useState(false);
  const [notDoneActive, setNotDoneActive] = useState(false);
  const [listToDisplay, setListToDisplay] = useState(0);
  const { taskList, doneTasks, notDoneTasks } = useContext(
    TaskListContext
  ) as TaskListType;
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
  const listOfLists = [
    taskList.filter((task) => task.categorie === name),
    doneTasks.filter((task) => task.categorie === name),
    notDoneTasks.filter((task) => task.categorie === name),
  ];
  let filteredList = listOfLists[listToDisplay];
  return {
    handleAll,
    handleDone,
    handleNotDone,
    allActive,
    doneActive,
    notDoneActive,
    filteredList,
  };
};
export default useFilterTasks;
