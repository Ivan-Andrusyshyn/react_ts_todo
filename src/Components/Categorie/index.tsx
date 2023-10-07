import React from "react";
import * as S from "./styles";
import { Link, useParams } from "react-router-dom";

interface CategorieItemProps {
  name: string;
  color: string;
}

const CategorieItem: React.FC<CategorieItemProps> = ({ name, color }) => {
  const params = useParams();
  console.log(params);

  return (
    <Link
      to={"/categorie/" + name}
      style={{
        textDecoration: "none",
        borderBottom: params.name === name ? `1px solid ${color}` : "",
      }}
    >
      <S.Categorie
        style={{
          transform: params.name === name ? "translateX(5px)" : "none",
        }}
      >
        <S.ColorTag color={color} />
        <S.ListName>{name}</S.ListName>
      </S.Categorie>
    </Link>
  );
};

export default CategorieItem;
