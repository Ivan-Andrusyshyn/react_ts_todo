import React from "react";
import * as S from "./styles";
interface loaderProp {
  isLoading: boolean;
}
const LoaderComponent: React.FC<loaderProp> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <S.LoaderWrapper>
          <S.Backdrop>
            <S.Loader />
          </S.Backdrop>
        </S.LoaderWrapper>
      )}
    </>
  );
};

export default LoaderComponent;
