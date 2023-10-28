import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Contexts/authContext";
import { AuthType } from "../../../Contexts/typesContext/authType";
import Logo from "../../../Img/Logo.png";
import TaskFill from "../../../Img/taskFill.png";
import Folder from "../../../Img/folder.svg";
import Logout from "../../../Img/logout.svg";
import SidebarItem from "../../../Components/SidebarItem";
import ExpandSidebarItem from "../../../Components/ExpandSidebarItem";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "../styles";
import Settings from "../../../Img/settings.svg";
import SettingsItem from "../../../Components/Settings";
import { useTranslation } from "react-i18next";
import LoaderInButton from "../../../Components/AuthLoader/AuthLoader";
import AnimatedContainer from "../../AnimationsPages/toBottom";

interface propsSidebar {
  toggleSidebar?: () => void;
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
