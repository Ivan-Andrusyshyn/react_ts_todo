import React from "react";
import * as S from "./styles";
import { DeleteType } from "../../Contexts/typesContext/delete_edit_Type";
import { DeleteContext } from "../../Contexts/delete_edit_Context";
import { useContext } from "react";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskListType } from "../../Contexts/typesContext/taskType";

const DeleteModal: React.FC = () => {
  const { showDelete, setShowDelete, id, setId } = useContext(
    DeleteContext
  ) as DeleteType;
  const { deleteTask } = useContext(TaskListContext) as TaskListType;

  function handleCancel() {
    setShowDelete(false);
  }

  function handleConfirm() {
    deleteTask(id);
    setId(0);
    setShowDelete(false);
  }

  return (
    <S.Background>
      <S.Container showDelete={showDelete}>
        <S.Text>Are you sure you want to delete this task?</S.Text>
        <S.Buttons>
          <S.DeletButton onClick={handleConfirm}>Delete</S.DeletButton>
          <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default DeleteModal;
