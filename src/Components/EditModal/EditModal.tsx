import React, { useContext, useState } from "react";
import * as S from "./styles";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskProps, TaskListType } from "../../Contexts/taskType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/categoriesType";
import { ActionMeta, InputActionMeta } from "react-select";
import Select from "react-select/dist/declarations/src/Select";
import { DeleteContext } from "../../Contexts/deleteContext";
import { DeleteType } from "../../Contexts/deleteType";

const EditModal: React.FC = () => {
  const { editTask } = useContext(TaskListContext) as TaskListType;
  const { setShowEdit, id } = useContext(DeleteContext) as DeleteType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;

  const [taskName, setTaskName] = useState("");
  const [taskCat, setTaskCat] = useState(
    categList.findIndex((cat) => cat.name === "None")
  );

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }

  function handleCancel() {
    setShowEdit(false);
  }

  function handleEdit() {
    const newTask: TaskProps = {
      id: Math.random(),
      title: taskName,
      categorie: categList[taskCat].name,
      color: categList[taskCat].color,
      done: false,
    };

    setShowEdit(false);

    editTask(id, newTask);
  }

  var e = document.getElementById("select") as HTMLSelectElement;

  function handleChange() {
    setTaskCat(Number(e.options[e.selectedIndex].value));
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
          {categList.map((cat) => (
            <option value={cat.id}>{cat.name}</option>
          ))}
        </S.Select>
        <S.Buttons>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
          <S.DeletButton onClick={handleEdit}>Edit</S.DeletButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default EditModal;
