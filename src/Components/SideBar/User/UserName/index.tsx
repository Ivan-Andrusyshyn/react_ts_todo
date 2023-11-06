import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoaderInButton from "../../../Loader/AuthLoader";
import * as S from "../../SideBar/styles";

import React from "react";
interface UserNameProp {
  isLoading: boolean;
  handleEditClick: () => void;
  newUserName: string;
}
const UserName: React.FC<UserNameProp> = ({
  isLoading,
  handleEditClick,
  newUserName,
}) => (
  <S.UserName onClick={handleEditClick}>
    <S.UserIcon icon={faUser} />
    {isLoading ? (
      <LoaderInButton isLoading={isLoading} loaderColor="#777" />
    ) : (
      newUserName
    )}
  </S.UserName>
);
export default UserName;
