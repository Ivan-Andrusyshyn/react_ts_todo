import { useTranslation } from "react-i18next";
import AddTask from "../../../Components/AddTask";
import FilterTag from "../../../Components/FilterTag";
import TaskCard from "../../../Components/TaskCard";
import LanguageSelector from "../../../i18n/LanguageSelector";
import * as S from "../styles";
import { CategorieMainProps, listCategoriesType } from "../types/types";
import Filter from "../../../Img/filter.svg";
import { Key } from "react";
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
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.title}
          list={task.categorie}
          color={task.color}
          done={task.done}
          date={task.date}
        />
      ))}
      <AddTask />
    </S.Main>
  );
};
export default CategorieMain;
