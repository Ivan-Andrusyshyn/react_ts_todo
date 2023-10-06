import React, { useState, useContext } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import LoaderInButton from "../../Components/AuthLoader/AuthLoader";
import { AuthType } from "../../Contexts/authType";

const Login: React.FC = () => {
  const { handleLogin, isLoading } = useContext(AuthContext) as AuthType;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginClick() {
    handleLogin(email, password);
  }

  function handleEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <S.Page>
      <S.LeftSide>
        <S.Img src={Logo}></S.Img>
      </S.LeftSide>
      <S.RightSide>
        <S.Title>Welcome to Tasker</S.Title>
        <S.Subtitle>
          Please, insert your information to access your tasks.
        </S.Subtitle>
        <S.FieldName>Email</S.FieldName>
        <S.InputField
          value={email}
          id="email"
          onChange={handleEmail}
          placeholder="Insert your email"
        ></S.InputField>
        <S.FieldName>Password</S.FieldName>
        <S.InputField
          value={password}
          id="password"
          onChange={handlePassword}
          placeholder="Insert your password"
          type="password"
        ></S.InputField>
        <S.KeepSigned>
          <S.Checkbox />
          <S.Subtitle>Remember me</S.Subtitle>
        </S.KeepSigned>
        <S.SignIn onClick={handleLoginClick}>
          Sign In <LoaderInButton isLoading={isLoading} />
        </S.SignIn>
        <S.Subtitle>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </S.Subtitle>
      </S.RightSide>
    </S.Page>
  );
};

export default Login;
