import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { AuthType } from "../../Contexts/typesContext/authType";
import Logo from "../../Img/Logo.png";
import TaskFill from "../../Img/taskFill.png";
import Settings from "../../Img/settings.svg";
import Folder from "../../Img/folder.svg";
import Logout from "../../Img/logout.svg";
import SidebarItem from "../../Components/SidebarItem";
import ExpandSidebarItem from "../../Components/ExpandSidebarItem";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";
interface propsSidebar {
  toggleSidebar?: () => void;
}
const SideBar: React.FC<propsSidebar> = () => {
  const { signOut, userData } = useContext(AuthContext) as AuthType;

  function handleLogout() {
    signOut();
  }
  return (
    <S.Sidebar>
      <S.Img src={Logo} />
      <S.UserName>
        <S.UserIcon icon={faUser} />
        {userData?.userName}
      </S.UserName>
      <S.Tabs>
        <SidebarItem icon={TaskFill} name="Tasks" isActive={true}></SidebarItem>
        <ExpandSidebarItem icon={Folder} name="Categories"></ExpandSidebarItem>
        <SidebarItem
          icon={Settings}
          name="Settings"
          isActive={false}
        ></SidebarItem>
      </S.Tabs>
      <Link
        to="/login"
        style={{ textDecoration: "none" }}
        onClick={handleLogout}
      >
        <SidebarItem icon={Logout} name="Logout" isActive={false}></SidebarItem>
      </Link>
    </S.Sidebar>
  );
};
export default SideBar;
