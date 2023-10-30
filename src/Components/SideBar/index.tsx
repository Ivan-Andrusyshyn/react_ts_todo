import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { AuthType } from "../../Contexts/typesContext/authType";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "../../Pages/Categorie/styles";
import SettingsItem from "../Settings";
import { useTranslation } from "react-i18next";
import LoaderInButton from "../AuthLoader/AuthLoader";
import { Folder, Logo, Logout, Settings, TaskFill } from "..";
import AnimatedContainer from "../Animations/AnimationsComponents";
import SidebarItem from "./SidebarItem";
import ExpandSidebarItem from "./ExpandSidebarItem";

interface propsSidebar {
  toggleSidebar?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const SideBar: React.FC<propsSidebar> = () => {
  const { signOut, changeUserName, userData, isLoading } = useContext(
    AuthContext
  ) as AuthType;

  const { t } = useTranslation();

  const [showUserModal, setShowUserModal] = useState(false);
  const [userName, setUserName] = useState<string>(userData?.userName || "");
  const handleLogout = () => {
    signOut();
  };

  const handleChangeUser = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName) {
      return;
    }
    setShowUserModal(false);
    changeUserName(userName);
  };
  return (
    <S.Sidebar>
      <S.Img src={Logo} />

      {showUserModal ? (
        <S.UserForm action="" onSubmit={handleChangeUser}>
          <AnimatedContainer>
            <S.UserInput
              type="text"
              name=""
              id=""
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <S.UserBtn type="submit">Edit</S.UserBtn>
          </AnimatedContainer>
        </S.UserForm>
      ) : (
        <S.UserName onClick={() => setShowUserModal(true)}>
          <S.UserIcon icon={faUser} />
          {isLoading ? (
            <LoaderInButton isLoading={isLoading} loaderColor={"#777"} />
          ) : (
            userData?.userName
          )}
        </S.UserName>
      )}

      <AnimatedContainer>
        <S.Tabs>
          <SidebarItem
            icon={TaskFill}
            name={t("sbTasks")}
            isActive={true}
          ></SidebarItem>
          <ExpandSidebarItem
            icon={Folder}
            name={t("sbCategories")}
          ></ExpandSidebarItem>
          <SettingsItem
            isActive={false}
            icon={Settings}
            name={t("sbSettings")}
          />
        </S.Tabs>
        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          onClick={handleLogout}
        >
          <SidebarItem icon={Logout} name={t("lgOut")} isActive={false} />
        </Link>
      </AnimatedContainer>
    </S.Sidebar>
  );
};
export default SideBar;
