import { useTranslation } from "react-i18next";
import AddTaskBtn from "../../../Components/AddTask-Btn";
import FilterTag from "../../../Components/FilterTag";
import TaskItem from "../../../Components/TaskItem";
import LanguageSelector from "../../../i18n/LanguageSelector";
import * as S from "../styles";
import { CategorieMainProps, listCategoriesType } from "../types/types";
import Filter from "../../../assets/svg/filter.svg";
const CategorieMain: React.FC<CategorieMainProps> = ({
  name,
  handleDone,
  handleAll,
  handleNotDone,
  allActive,
  doneActive,
  notDoneActive,
  listOfLists,
  listToDisplay,
}) => {
  const { t } = useTranslation();

  return (
    <S.Main>
      <LanguageSelector />
      <S.Header>{name}</S.Header>
      <S.TitleAndFilter>
        <S.Title onClick={handleDone}>{t("upBar")}</S.Title>
        <S.FilterField>
          <div onClick={handleAll}>
            <FilterTag name={t("filterAll")} active={allActive} />
          </div>
          <div onClick={handleDone}>
            <FilterTag name={t("filterDn")} active={doneActive} />
          </div>
          <div onClick={handleNotDone}>
            <FilterTag name={t("filterNDone")} active={notDoneActive} />
          </div>
          <S.FilterIcon src={Filter} />
        </S.FilterField>
      </S.TitleAndFilter>
      {listOfLists[listToDisplay].map((task: listCategoriesType) => (
        <TaskItem
          key={task.id}
          id={task.id}
          name={task.title}
          list={task.categorie}
          color={task.color}
          done={task.done}
          date={task.date}
        />
      ))}
      <AddTaskBtn />
    </S.Main>
  );
};
export default CategorieMain;
