import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { TaskListContext } from "../../Contexts/taskListContext";
import { TaskProps, TaskListType } from "../../Contexts/typesContext/taskType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { DeleteContext } from "../../Contexts/delete_edit_Context";
import { DeleteType } from "../../Contexts/typesContext/delete_edit_Type";
import Calendar from "../Calendar/Calendar";
import { format } from "date-fns";
import Arrow from "../../Img/arrow.svg";
import { useTranslation } from "react-i18next";

const EditModal: React.FC = () => {
  const { editTask, taskList } = useContext(TaskListContext) as TaskListType;
  const { setShowEdit, id } = useContext(DeleteContext) as DeleteType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | Date>(new Date()); // Инициализируем выбранную дату как null
  const { t } = useTranslation();

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
    taskCat[0].date = selectedDate;
    editTask(id, taskCat[0]);
    setShowEdit(false);
  }
  useEffect(() => {
    const oldName = taskCat[0].title;
    setTaskName(oldName);
  }, [taskList]);
  const closeModalCalendar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowCalendar(false);
    }
  };
  return (
    <S.Background>
      {showCalendar && (
        <S.ModalOverlay onClick={closeModalCalendar}>
          <Calendar setSelectedDate={setSelectedDate} />
        </S.ModalOverlay>
      )}
      <S.Container>
        <S.Text>{t("mdlEdInp")}</S.Text>
        <S.TitleInput
          placeholder={t("mdlAdInpPlch")}
          onChange={handleTyping}
          value={taskName}
        />
        <S.DatePicker
          isActive={showCalendar}
          onClick={() => setShowCalendar(true)}
        >
          {format(selectedDate, "yyyy-MM-dd")}
          <S.Arrow isActive={showCalendar} src={Arrow} />
        </S.DatePicker>
        <S.Text>{t("mdlEdOpt")}</S.Text>
        <S.Select id="select">
          <option>{taskCat[0].categorie}</option>
        </S.Select>
        <S.Buttons>
          <S.AddButton onClick={handleEdit}>{t("btnEd")}</S.AddButton>
          <S.CancelButton onClick={handleCancel}>{t("btnCanc")}</S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default EditModal;
