import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { AddContext } from "../../Contexts/addContext";
import { AddType } from "../../Contexts/typesContext/addType";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskProps, TaskListType } from "../../Contexts/typesContext/taskType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";

const AddModal: React.FC = () => {
  const { addTask } = useContext(TaskListContext) as TaskListType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const { setShowAdd } = useContext(AddContext) as AddType;

  const [taskName, setTaskName] = useState<string>("");
  const [taskCat, setTaskCat] = useState(0);
  const [error, setError] = useState<string>("");
  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }
  useEffect(() => {
    const newTimeOut = setTimeout(() => {
      setError("");
    }, 2000);
    return () => {
      clearTimeout(newTimeOut);
    };
  }, [error]);
  function handleCancel() {
    setShowAdd(false);
  }
  function handleAdd() {
    if (!taskName) {
      setError("Please enter task name.");
      return;
    }
    if (categList[taskCat]) {
      const newTask: TaskProps = {
        id: Math.random(),
        title: taskName,
        categorie: categList[taskCat].name,
        color: categList[taskCat].color,
        done: false,
      };
      setShowAdd(false);
      addTask(newTask);
    } else {
      console.error("Invalid category selected");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const isNumber = Number(event.target.value);
    setTaskCat(isNumber);
  }

  return (
    <S.Background>
      <S.Container>
        <S.Text>Insert name</S.Text>
        <S.TitleInput
          error={error}
          placeholder={error ? error : "Task name"}
          onChange={handleTyping}
          value={taskName}
        />
        <S.Text>Select a categorie</S.Text>
        <S.Select id="select" onChange={handleChange}>
          {categList.map((cat, i) => (
            <option value={i} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </S.Select>
        <S.Buttons>
          <S.AddButton onClick={handleAdd}>Add</S.AddButton>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;
