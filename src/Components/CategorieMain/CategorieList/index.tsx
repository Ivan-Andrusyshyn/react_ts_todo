import { useTranslation } from "react-i18next";
import AddTaskBtn from "../AddTask-Btn";
import FilterTag from "../FilterTag";
import TaskItem from "../TaskItem";
import LanguageSelector from "../../../i18n/LanguageSelector";
import * as S from "../../../Pages/Categorie/styles";
import { CategorieMainProps, listCategoriesType } from "../types/types";
import AnimatedContainer from "../../Animations/AnimationsComponents";
import Filter from "../../../assets/svg/filter.svg";
const CategorieMain: React.FC<CategorieMainProps> = ({
  name,
  handleDone,
  handleAll,
  handleNotDone,
  allActive,
  doneActive,
  notDoneActive,
  listOfTasks,
}) => {
  const { t } = useTranslation();

  return (
    <S.MainWrapper data-testid="categoryContainer">
      <AnimatedContainer>
        <S.Main>
          <LanguageSelector />
          <S.Header>{name}</S.Header>
          <S.TitleAndFilter data-testid="categoryPage_filter">
            <S.Title onClick={handleDone} data-testid="filterBtnDoneTasks">
              {t("upBar")}
            </S.Title>
            <S.FilterField>
              <div onClick={handleAll} data-testid="filterBtnAllTasks">
                <FilterTag name={t("filterAll")} active={allActive} />
              </div>
              <div onClick={handleDone}>
                <FilterTag name={t("filterDn")} active={doneActive} />
              </div>
              <div onClick={handleNotDone} data-testid="filterBtnNotDoneTasks">
                <FilterTag name={t("filterNDone")} active={notDoneActive} />
              </div>
              <S.FilterIcon src={Filter} />
            </S.FilterField>
          </S.TitleAndFilter>
          {listOfTasks.map((task: listCategoriesType) => (
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
      </AnimatedContainer>
    </S.MainWrapper>
  );
};
export default CategorieMain;
