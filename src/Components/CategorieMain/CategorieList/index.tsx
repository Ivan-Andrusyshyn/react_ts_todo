import AddTaskBtn from "../AddTask-Btn";
import TaskItem from "../TaskItem";
import LanguageSelector from "../../../i18n/LanguageSelector";
import * as S from "../../../Pages/Categorie/styles";
import { CategorieMainProps, listCategoriesType } from "../types/types";
import AnimatedContainer from "../../Animations/AnimationsComponents";
import useFilterTasks from "../../../hooks/useFilterTasks";
import ButtonController from "../ButtonsFilter";
const CategorieMain: React.FC<CategorieMainProps> = ({ name }) => {
  const { filteredList } = useFilterTasks(name);

  return (
    <S.MainWrapper data-testid="categoryContainer">
      <AnimatedContainer>
        <S.Main>
          <LanguageSelector />
          <S.Header>{name}</S.Header>

          <ButtonController name={name} />

          {filteredList.map((task: listCategoriesType) => (
            <TaskItem key={task.id} {...task} />
          ))}
          <AddTaskBtn />
        </S.Main>
      </AnimatedContainer>
    </S.MainWrapper>
  );
};
export default CategorieMain;
