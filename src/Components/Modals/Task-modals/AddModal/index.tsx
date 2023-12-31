import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { AddContext } from "../../../../Contexts/addContext";
import { AddType } from "../../../../Contexts/typesContext/addType";
import { TaskListContext } from "../../../../Contexts/taskListContext";
import {
  TaskProps,
  TaskListType,
} from "../../../../Contexts/typesContext/taskType";
import { CategoriesContext } from "../../../../Contexts/categoriesContext";
import { CategorieContextType } from "../../../../Contexts/typesContext/categoriesType";
import Calendar from "../../Calendar";

import { format } from "date-fns";
import { useTranslation } from "react-i18next";
import { Arrow } from "../../..";
import useInput from "../../../../hooks/useInput";
const AddModal: React.FC = () => {
  const { addTask } = useContext(TaskListContext) as TaskListType;
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const { setShowAdd } = useContext(AddContext) as AddType;
  const { t } = useTranslation();

  const [taskCat, setTaskCat] = useState(0);
  const [error, setError] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<number | Date>(new Date()); // Инициализируем выбранную дату как null
  const [showCalendar, setShowCalendar] = useState(false);

  const taskName = useInput("");
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
    if (!taskName.value) {
      setError("Please enter task name.");
      return;
    }
    if (categList[taskCat]) {
      const newTask: TaskProps = {
        id: Math.random(),
        title: taskName.value,
        categorie: categList[taskCat].name,
        color: categList[taskCat].color,
        done: false,
        date: selectedDate,
      };
      setShowAdd(false);
      addTask(newTask);
    } else {
      console.error("Invalid category selected");
    }
  }
  const closeModalCalendar = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setShowCalendar(false);
    }
  };
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const isNumber = Number(event.target.value);
    setTaskCat(isNumber);
  }
  return (
    <S.Background data-testid="backdropModal">
      {showCalendar && (
        <S.ModalOverlay
          onClick={closeModalCalendar}
          data-testid="calendarModal"
        >
          <Calendar setSelectedDate={setSelectedDate} />
        </S.ModalOverlay>
      )}
      <S.Container>
        <S.Text>{t("mdlAdInp")}</S.Text>
        <S.TitleInput
          data-testid="inputAddModal"
          error={error}
          placeholder={error ? error : t("mdlAdInpPlch")}
          onChange={taskName.handleChange}
          value={taskName.value}
        />

        <S.DatePicker
          isActive={showCalendar}
          onClick={() => setShowCalendar(true)}
          data-testid="datePicker"
        >
          {format(selectedDate, "yyyy-MM-dd")}
          <S.Arrow isActive={showCalendar} src={Arrow} />
        </S.DatePicker>
        <S.Text>{t("mdlAdOpt")}</S.Text>
        <S.Select id="select" onChange={handleChange} data-testid="combobox">
          {categList.map((cat, i) => (
            <option value={i} key={cat.id}>
              {cat.name}
            </option>
          ))}
        </S.Select>
        <S.Buttons>
          <S.AddButton onClick={handleAdd} data-testid="btnAddModal">
            {t("mdlAdBtnAdd")}
          </S.AddButton>
          <S.CancelButton onClick={handleCancel} data-testid="btnCancel">
            {t("mdlAdBtnCanc")}
          </S.CancelButton>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
};

export default AddModal;
