import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";

import AddTaskBtn from "../../Components/CategorieMain/AddTask-Btn";
import FilterTag from "../../Components/CategorieMain/FilterTag";
import Filter from "../../assets/svg/filter.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CategorieContextType } from "../../Contexts/typesContext/categoriesType";
import { CategoriesContext } from "../../Contexts/categoriesContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../../i18n/LanguageSelector";
import SideBar from "../../Components/SideBar/SideBar";
import { useMediaQuery } from "react-responsive";
import useFilterTasks from "../../hooks/useFilterTasks";

const Home: React.FC = () => {
  const { categList } = useContext(CategoriesContext) as CategorieContextType;
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (categList) {
      const nameNav = categList[0]?.name;
      if (nameNav) {
        navigate("/categorie/" + nameNav);
      }
    }
  }, []);
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 920 });
  const {
    handleAll,
    handleDone,
    handleNotDone,
    allActive,
    doneActive,
    notDoneActive,
  } = useFilterTasks("");
  const toggleSidebar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const clickedElement = e.target as HTMLElement;
    if (clickedElement.id === "backdrop") {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };
  return (
    <S.Page>
      <S.BurgerWrapper
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        id="burger_menu"
      >
        <FontAwesomeIcon icon={faBars} size="xl" />
      </S.BurgerWrapper>
      {!isTablet && <SideBar />}
      {isSidebarOpen && (
        <S.Backdrop onClick={toggleSidebar} id="backdrop">
          <SideBar />
        </S.Backdrop>
      )}
      <S.Main>
        <LanguageSelector />
        <S.Header>{t("homeTitle")}</S.Header>
        <S.TitleAndFilter>
          <S.Title>{t("upBar")}</S.Title>
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

        <AddTaskBtn />
      </S.Main>
    </S.Page>
  );
};

export default Home;
