import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
export const BurgerWrapper = styled.div`
  position: fixed;
  left: 50px;
  top: 30px;
  cursor: pointer;
`;
export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: row;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Sidebar = styled.div`
  height: 100vh;
  width: 30vw;
  background-color: white;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  box-sizing: border-box;
`;
export const Img = styled.img`
  width: 50px;
  margin: 32px;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
`;
export const Main = styled.div`
  height: 100vh;
  width: 82vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
  @media screen and (min-width: 920px) {
    width: 100vw;
  }
`;

export const Header = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: #555;
  margin: 16px;
`;

export const TitleAndFilter = styled.div`
  height: 20px;
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #555;
`;

export const FilterField = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
`;

export const FilterIcon = styled.img`
  height: 20px;
  margin: 0 8px;
`;
export const UserName = styled.p`
  color: #777;
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #bdbdbd;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }
`;
export const UserIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;
export const UserForm = styled.form`
  display: flex;
  gap: 5px;
`;
export const UserInput = styled.input`
  padding: 5px 0 5px 10px;
  border-radius: 6px;
  transition: border-color 0.3s, outline-color 0.3s;
  border: 1px solid #777;
  color: #666;
  &:focus {
    border-color: #bdbdbd;
    outline: #bdbdbd;
  }
`;
export const UserBtn = styled.button`
  padding: 5px 10px;
  border: 1px solid #777;
  border-radius: 6px;
  transition: background-color 0.3s linear;
  cursor: pointer;
  &:hover {
    background-color: #bdbdbd;
  }
`;
