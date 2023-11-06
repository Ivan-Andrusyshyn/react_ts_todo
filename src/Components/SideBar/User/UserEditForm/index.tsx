import React, { useContext, useEffect, useState } from "react";
import * as S from "../../SideBar/styles";
import AuthContext from "../../../../Contexts/authContext";
import { AuthType } from "../../../../Contexts/typesContext/authType";
import UserName from "../UserName";

const UserEditForm: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { changeUserName, userData, isLoading } = useContext(
    AuthContext
  ) as AuthType;
  const [newUserName, setNewUserName] = useState("");

  const handleEditClick = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    if (!userData?.userName) return;
    setNewUserName(userData.userName);
  }, [userData]);
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    changeUserName(newUserName);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <S.UserForm onSubmit={handleFormSubmit}>
          <S.UserInput
            type="text"
            value={newUserName}
            onChange={(e: {
              target: { value: React.SetStateAction<string> };
            }) => setNewUserName(e.target.value)}
          />
          <S.UserBtn type="submit">Save</S.UserBtn>
        </S.UserForm>
      ) : (
        <UserName
          isLoading={isLoading}
          handleEditClick={handleEditClick}
          newUserName={newUserName}
        />
      )}
    </>
  );
};

export default UserEditForm;
