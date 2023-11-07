import styled, { css } from "styled-components";
interface propsInputAuth {
  error: string;
}

export const FieldName = styled.h2`
  color: #777;
  font-family: Roboto, Arial;
  font-size: 16px;
  font-weight: 500;
  margin: 8px;
  margin-left: 0;
`;

export const InputField = styled.input<propsInputAuth>`
  width: 25vw;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #999;
  padding-left: 8px;
  font-size: 16px;
  color: #777;
  box-sizing: border-box;
  transition: color, border 0.3s linear;
  &:focus {
    border: 1px solid #999;
    outline: none;
  }

  &::placeholder {
    color: #bbb;
    ${(props) =>
      props.error &&
      css`
        color: red;
      `};
  }
  ${(props) =>
    props.error &&
    css`
      border: 1px solid red;
    `};
`;
export const Subtitle = styled.h2`
  color: #999;
  font-family: Roboto, Arial;
  font-size: 16px;
  font-weight: 300;
  margin: 8px;
  margin-left: 0;
  margin-right: 16px;

  a {
    color: #7f56da;
    font-weight: bold;

    &:hover {
      color: #613db7;
      cursor: pointer;
    }
  }
`;
export const SignIn = styled.button`
  width: 25vw;
  height: 40px;
  border-radius: 8px;
  background: #7f56da;
  color: #fff;
  font-size: 16px;
  border: 0px;
  font-weight: 400;

  margin: 16px 0px;

  &:hover {
    background: #613db7;
    cursor: pointer;
  }
`;
export const KeepSigned = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 16px;
`;
export const IconsPasswordWrapper = styled.span`
  position: absolute;
  top: 12px;
  transform: translateX(-150%);
  cursor: pointer;
`;
export const Checkbox = styled.input.attrs({ type: "checkbox" })`
  border: 1px solid #333;
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;
