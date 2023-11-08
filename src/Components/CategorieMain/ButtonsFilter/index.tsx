import { useTranslation } from "react-i18next";
import Filter from "../../../assets/svg/filter.svg";
import FilterTag from "../FilterTag";
import * as S from "../../../Pages/Categorie/styles";
import React from "react";
import useFilterTasks from "../../../hooks/useFilterTasks";
import ButtonFilterProp from "./types";

const ButtonsFilter: React.FC<ButtonFilterProp> = ({ name }) => {
  const { t } = useTranslation();
  const controller = useFilterTasks(name);

  return (
    <S.TitleAndFilter data-testid="categoryPage_filter">
      <S.Title onClick={controller.handleDone}>{t("upBar")}</S.Title>
      <S.FilterField>
        <div onClick={controller.handleAll} data-testid="filterBtnAllTasks">
          <FilterTag name={t("filterAll")} active={controller.allActive} />
        </div>
        <div onClick={controller.handleDone} data-testid="filterBtnDoneTasks">
          <FilterTag name={t("filterDn")} active={controller.doneActive} />
        </div>
        <div
          onClick={controller.handleNotDone}
          data-testid="filterBtnNotDoneTasks"
        >
          <FilterTag
            name={t("filterNDone")}
            active={controller.notDoneActive}
          />
        </div>
        <S.FilterIcon src={Filter} />
      </S.FilterField>
    </S.TitleAndFilter>
  );
};
export default ButtonsFilter;
