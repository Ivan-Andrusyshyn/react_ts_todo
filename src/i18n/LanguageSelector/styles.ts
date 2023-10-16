import styled, { css } from "styled-components";
interface propSelect {
  selected: boolean;
}
export const BtnWraper = styled.div`
  position: absolute;
  top: 30px;
  right: 60px;
`;
export const LanguageButton = styled.button<propSelect>`
  width: 50px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) => !props.selected && "1px solid #bdbdbd"};
`;
export const imgBtn = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
`;
