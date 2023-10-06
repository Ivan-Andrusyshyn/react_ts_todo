import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface propLoader {
  isLoading: boolean;
}
const LoaderInButton: React.FC<propLoader> = ({ isLoading }) => (
  <>
    {isLoading && (
      <FontAwesomeIcon
        icon={faSpinner}
        size="sm"
        color="#fff"
        style={{ marginLeft: 10 }}
        className="fa-spin-pulse fa-spin-reverse"
      />
    )}
  </>
);
export default LoaderInButton;
