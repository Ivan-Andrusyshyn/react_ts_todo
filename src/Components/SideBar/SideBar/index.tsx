import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Contexts/authContext";
import { AuthType } from "../../../Contexts/typesContext/authType";
import * as S from "./styles";
import SettingsItem from "../Settings";
import { useTranslation } from "react-i18next";
import { Folder, Logo, Logout, Settings, TaskFill } from "../..";
import AnimatedContainer from "../../Animations/AnimationsComponents";
import SidebarItem from "../SidebarItem";
import ExpandSidebarItem from "../SidebarItem-categories";
import UserEditForm from "../User/UserEditForm";

interface propsSidebar {
  toggleSidebar?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
const SideBar: React.FC<propsSidebar> = () => {
  const { signOut } = useContext(AuthContext) as AuthType;

  const { t } = useTranslation();

  const handleLogout = () => {
    signOut();
  };

  return (
    <S.Sidebar>
      <S.Img src={Logo} />
      <UserEditForm />

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
