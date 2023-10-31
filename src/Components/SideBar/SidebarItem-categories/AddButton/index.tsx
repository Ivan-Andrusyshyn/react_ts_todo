import { t } from "i18next";
import * as S from "./styles";
import React from "react";
import { Add } from "../../..";
import { PropAddBtn } from "../../types/types";

const AddButton: React.FC<PropAddBtn> = ({ setShowForm }) => (
  <S.AddArea onClick={() => setShowForm(true)} data-testid="AddBtn">
    <S.AddIcon src={Add} />
    <S.AddText>{t("sbBtnAdd")}</S.AddText>
  </S.AddArea>
);
export default AddButton;
