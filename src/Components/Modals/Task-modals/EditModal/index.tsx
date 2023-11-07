import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import { TaskListType } from "../../../../Contexts/typesContext/taskType";
import { DeleteContext } from "../../../../Contexts/delete_edit_Context";
import { DeleteType } from "../../../../Contexts/typesContext/delete_edit_Type";
import Calendar from "../../Calendar";
import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Arrow } from "../../..";
import useInput from "../../../../hooks/useInput";
const EditModal: React.FC = () => {
  const { editTask, taskList } = useContext(TaskListContext) as TaskListType;
  const { setShowEdit, id } = useContext(DeleteContext) as DeleteType;
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<number | Date>(new Date()); // Инициализируем выбранную дату как null
  const { t } = useTranslation();

  const [taskCat, setTaskCat] = useState(
    taskList.filter((item) => item.id === id)
  );
  const taskName = useInput("");
  function handleCancel() {
    setShowEdit(false);
  }

  function handleEdit() {
    taskCat[0].title = taskName.value;
    taskCat[0].date = selectedDate;
    editTask(id, taskCat[0]);
    setShowEdit(false);
  }
  useEffect(() => {
    const oldName = taskCat[0].title;
    taskName.setValue(oldName);
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
          data-testid="inputTitle"
          placeholder={t("mdlAdInpPlch")}
          onChange={taskName.handleChange}
          value={taskName.value}
        />
        <S.DatePicker
          data-testid="datepicker"
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
          <S.AddButton data-testid="edit_btn" onClick={handleEdit}>
            {t("btnEd")}
          </S.AddButton>
          <S.CancelButton data-testid="cancel_btn" onClick={handleCancel}>
            {t("btnCanc")}
          </S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default EditModal;
