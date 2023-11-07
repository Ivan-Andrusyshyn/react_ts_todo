import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { AuthType } from "../../Contexts/typesContext/authType";
import AnimatedContainerBottom from "../../Components/Animations/AnimationsPages/toBottom";
import AnimatedContainerTop from "../../Components/Animations/AnimationsPages/toTop";
import useInput from "../../hooks/useInput";
import LoginForm from "../../Components/LoginForm";
const Login: React.FC = () => {
  const { handleLogin, isLoading, isError } = useContext(
    AuthContext
  ) as AuthType;
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const email = useInput("");
  const password = useInput("");

  useEffect(() => {
    const newTimeOut = setTimeout(() => {
      setError("");
    }, 2000);
    return () => {
      clearTimeout(newTimeOut);
    };
  }, [error]);
  function handleLoginClick(e: React.MouseEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter");
      return;
    }
    handleLogin(email.value, password.value);
  }

  return (
    <S.Page data-testid="loginPage">
      <AnimatedContainerBottom>
        <S.LeftSide>
          <S.Img src={Logo} />
        </S.LeftSide>
      </AnimatedContainerBottom>
      <AnimatedContainerTop>
        <S.RightSide>
          <S.Title>Welcome to Tasker</S.Title>
          <S.Subtitle>
            Please, insert your information to access your tasks.
          </S.Subtitle>
          <LoginForm
            email={email}
            password={password}
            showPassword={showPassword}
            error={error}
            isLoading={isLoading}
            isError={isError}
            handleLoginClick={handleLoginClick}
            setShowPassword={setShowPassword}
            registration={false}
          />
          <S.Subtitle>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </S.Subtitle>
        </S.RightSide>
      </AnimatedContainerTop>
    </S.Page>
  );
};

export default Login;
