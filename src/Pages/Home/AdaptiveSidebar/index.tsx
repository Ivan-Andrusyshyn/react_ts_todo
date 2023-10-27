import { useMediaQuery } from "react-responsive";
import SideBar from "../SideBar";
import * as S from "../styles";
import { SidebarProps } from "./types";
const AdaptiveSideBar: React.FC<SidebarProps> = ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  const isTablet = useMediaQuery({ minWidth: 320, maxWidth: 920 });
  return (
    <>
      {isSidebarOpen && (
        <S.Backdrop onClick={toggleSidebar} id="backdrop">
          {!isTablet && <SideBar />}
          <SideBar />
        </S.Backdrop>
      )}
    </>
  );
};
export default AdaptiveSideBar;
