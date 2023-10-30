import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import propLoader from "./type";

const LoaderInButton: React.FC<propLoader> = ({ isLoading, loaderColor }) => (
  <>
    {isLoading && (
      <FontAwesomeIcon
        icon={faSpinner}
        size="sm"
        color={loaderColor}
        style={{ marginLeft: 10 }}
        className="fa-spin-pulse fa-spin-reverse"
      />
    )}
  </>
);
export default LoaderInButton;
