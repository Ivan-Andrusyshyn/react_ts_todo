import React, { useContext } from "react";
import * as S from "./styles";
import { TaskListContext } from "../../../Contexts/taskListContext";
import { TaskListType } from "../../../Contexts/typesContext/taskType";
import { DeleteContext } from "../../../Contexts/delete_edit_Context";
import { DeleteType } from "../../../Contexts/typesContext/delete_edit_Type";
import { format, isBefore } from "date-fns";
import { Edit, Erase } from "../..";
import { TaskCardProps } from "../types/types";

const TaskItem: React.FC<TaskCardProps> = ({
  id,
  name,
  list,
  color,
  done,
  date,
}) => {
  const { setShowDelete, setShowEdit, setId } = useContext(
    DeleteContext
  ) as DeleteType;
  const { checkTask } = useContext(TaskListContext) as TaskListType;

  function handleCheck() {
    checkTask(id);
  }
  const handleEditTask = () => {
    setShowEdit(true);
    setId(id);
  };
  const handleDelete = () => {
    setShowDelete(true);
    setId(id);
  };
  const dateConvertation = (): string => {
    const dateObject = new Date(date);
    return format(dateObject, "yyyy-MM-dd");
  };
  return (
    <S.Container>
      <S.CheckField>
        <S.CheckboxRing onClick={handleCheck}>
          <S.CheckFill done={done} />
        </S.CheckboxRing>
      </S.CheckField>
      <S.Description>
        <S.Name done={done}>{name}</S.Name>
        <S.ListBelong>
          <S.ColorTag color={color} />
          <S.ListName>{list}</S.ListName>
          <S.TermDate done={isBefore(new Date(date), new Date())}>
            Deadline: {dateConvertation()}
          </S.TermDate>
        </S.ListBelong>
      </S.Description>

      <S.Icon src={Edit} onClick={handleEditTask} />
      <S.Icon src={Erase} onClick={handleDelete} />
    </S.Container>
  );
};

export default TaskItem;
