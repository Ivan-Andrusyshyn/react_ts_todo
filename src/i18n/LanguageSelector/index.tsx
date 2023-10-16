import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState<string>("en");
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  const handleSelectLng = (lg: string) => {
    console.log(lg);

    changeLanguage(lg);
    setSelected(lg);
  };

  return (
    <S.BtnWraper>
      <S.LanguageButton
        onClick={() => handleSelectLng("en")}
        selected={selected === "en"}
      >
        <S.imgBtn
          src="https://tse1.mm.bing.net/th?id=OIP.lcElUjxX_dDwCNCb3KkG9QHaEo&pid=Api&P=0&h=180"
          alt="Eng"
        />
      </S.LanguageButton>
      <S.LanguageButton
        onClick={() => handleSelectLng("ukr")}
        selected={selected === "ukr"}
      >
        <S.imgBtn
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/1200px-Flag_of_Ukraine.svg.png"
          alt="Urk"
        />
      </S.LanguageButton>
    </S.BtnWraper>
  );
}

export default LanguageSelector;
