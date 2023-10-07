import React, { useContext, useState } from "react";
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

  const [taskName, setTaskName] = useState("");
  const [taskCat, setTaskCat] = useState(0);

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleCancel() {
    setShowAdd(false);
  }
  function handleAdd() {
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
          placeholder="Task name"
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
          <S.DeletButton onClick={handleAdd}>Add</S.DeletButton>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;