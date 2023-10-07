import React, { useState } from "react";
import * as S from "./styles";
import { Link, useParams } from "react-router-dom";

interface CategorieItemProps {
  name: string;
  color: string;
}

const CategorieItem: React.FC<CategorieItemProps> = ({ name, color }) => {
  const params = useParams();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <Link
      to={"/categorie/" + name}
      style={{
        textDecoration: "none",
      }}
    >
      <S.Categorie>
        <S.CustomRadioInput
          type="radio"
          id={name}
          onChange={() => setIsChecked(name === params.name)}
          checked={isChecked}
          color={color}
        />
        <S.LabelForm htmlFor={name} color={color}>
          {params.name === name && <S.Selected color={color} />}
        </S.LabelForm>

        <S.ListName>{name}</S.ListName>
      </S.Categorie>
    </Link>
  );
};

export default CategorieItem;
