import { t } from "i18next";
import Add from "../../../Img/add.svg";
import * as S from "./styles";
import React from "react";
interface PropAddBtn {
  setShowForm: (arg: boolean) => void;
}
const AddButton: React.FC<PropAddBtn> = ({ setShowForm }) => (
  <S.AddArea onClick={() => setShowForm(true)}>
    <S.AddIcon src={Add} />
    <S.AddText>{t("sbBtnAdd")}</S.AddText>
  </S.AddArea>
);
export default AddButton;
