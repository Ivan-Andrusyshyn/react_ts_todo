import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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
