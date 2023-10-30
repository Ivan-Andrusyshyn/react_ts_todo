import React from "react";
import * as S from "./styles";
import tagProps from "./type";

const FilterTag: React.FC<tagProps> = ({ name, active }) => {
  return (
    <S.Container active={active}>
      <S.TagName active={active}>{name}</S.TagName>
    </S.Container>
  );
};

export default FilterTag;
