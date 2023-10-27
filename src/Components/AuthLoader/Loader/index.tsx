import React from "react";
import * as S from "./styles";
interface loaderProp {
  isLoading: boolean;
}
const LoaderComponent: React.FC<loaderProp> = () => {
  return (
    <S.Backdrop>
      <S.Loader />
    </S.Backdrop>
  );
};

export default LoaderComponent;
