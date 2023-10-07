import React, { useContext, useEffect, useState } from "react";
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
  const { editTask, taskList } = useContext(TaskListContext) as TaskListType;
  const { setShowEdit, id } = useContext(DeleteContext) as DeleteType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;

  const [taskName, setTaskName] = useState("");
  const [taskCat, setTaskCat] = useState(
    taskList.filter((item) => item.id === id)
  );

  function handleTyping(event: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(event.target.value);
  }
  function handleCancel() {
    setShowEdit(false);
  }

  function handleEdit() {
    taskCat[0].title = taskName;
    editTask(id, taskCat[0]);
    setShowEdit(false);
  }
  useEffect(() => {
    const oldName = taskCat[0].title;
    setTaskName(oldName);
  }, [taskList]);

  return (
    <S.Background>
      <S.Container>
        <S.Text>Insert name</S.Text>
        <S.TitleInput
          placeholder="Task name"
          onChange={handleTyping}
          value={taskName}
        />
        <S.Text>Category</S.Text>
        <S.Select id="select">
          <option>{taskCat[0].categorie}</option>
        </S.Select>
        <S.Buttons>
          <S.DeletButton onClick={handleEdit}>Edit</S.DeletButton>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default EditModal;
