import React from "react";
import { Loader, LoaderWrapper, Backdrop } from "./Loader.styled";
interface loaderProp {
  isLoading: boolean;
}
const LoaderComponent: React.FC<loaderProp> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Backdrop>
            <Loader />
          </Backdrop>
        </LoaderWrapper>
      )}
    </>
  );
};

export default LoaderComponent;
