import React, { useState, createContext, useEffect } from "react";
import { TaskProps, TaskListType } from "./typesContext/taskType";
import ChildrenProps from "./typesContext/typeChildren";

export const TaskListContext = createContext<TaskListType | null>(null);

export const TaskListContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [taskList, setTaskList] = useState<TaskProps[]>(
    JSON.parse(localStorage.getItem("taskList") || "[]")
  );
  const [doneTasks, setDoneTasks] = useState<TaskProps[]>(
    taskList.filter((task: TaskProps) => task.done === true)
  );
  const [notDoneTasks, setNotDoneTasks] = useState<TaskProps[]>(
    taskList.filter((task: TaskProps) => task.done === false)
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setDoneTasks(taskList.filter((task: TaskProps) => task.done === true));
    setNotDoneTasks(taskList.filter((task: TaskProps) => task.done === false));
  }, [taskList]);

  const addTask = (task: TaskProps) => {
    const updatedTaskList = [...taskList, task];
    setTaskList(updatedTaskList);
  };

  const checkTask = (id: number) => {
    const updatedTaskList = taskList.map((task: TaskProps) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const editTask = (id: number, newTask: TaskProps) => {
    const updatedTaskList = taskList.map((task: TaskProps) => {
      if (task.id === id) {
        return newTask;
      }
      return task;
    });
    setTaskList(updatedTaskList);
  };

  const deleteTask = (id: number) => {
    const updatedTaskList = taskList.filter(
      (task: TaskProps) => task.id !== id
    );
    setTaskList(updatedTaskList);
  };
  const deleteCategoryTasks = (categoryName: string) => {
    const updatedTaskList = taskList.filter(
      (task) => task.categorie !== categoryName
    );
    setTaskList(updatedTaskList);
  };
  return (
    <TaskListContext.Provider
      value={{
        taskList,
        doneTasks,
        notDoneTasks,
        addTask,
        deleteCategoryTasks,
        checkTask,
        deleteTask,
        editTask,
      }}
    >
      {children}
    </TaskListContext.Provider>
  );
};
