import React, { useState, useContext, useEffect } from "react";
import * as S from "./styles";
import Logo from "../../Img/Logo.png";
import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import LoaderInButton from "../../Components/AuthLoader/AuthLoader";
import { AuthType } from "../../Contexts/typesContext/authType";
import ErrorMessageAuth from "../../Components/ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const Login: React.FC = () => {
  const { handleLogin, isLoading, isError } = useContext(
    AuthContext
  ) as AuthType;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
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
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <S.LeftSide>
          <S.Img src={Logo} />
        </S.LeftSide>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <S.RightSide>
          <S.Title>Welcome to Tasker</S.Title>
          <S.Subtitle>
            Please, insert your information to access your tasks.
          </S.Subtitle>
          <form action="" onSubmit={handleLoginClick}>
            <S.FieldName>Email</S.FieldName>
            <S.InputField
              autoComplete="username"
              value={email}
              error={error}
              id="email"
              onChange={handleEmail}
              placeholder={error ? `${error} email.` : "Insert your email"}
            ></S.InputField>
            <S.FieldName>Password</S.FieldName>
            <div style={{ position: "relative" }}>
              <S.InputField
                value={password}
                id="password"
                onChange={handlePassword}
                placeholder={
                  error ? `${error} password.` : "Insert your password"
                }
                type={showPassword ? "text" : "password"}
                error={error}
                autoComplete="current-password"
              />
              <S.IconsPasswordWrapper
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={!showPassword ? faEye : faEyeSlash}
                  style={{ color: "#777" }}
                />
              </S.IconsPasswordWrapper>
            </div>
            <S.KeepSigned>
              <S.Checkbox />
              <S.Subtitle>Remember me</S.Subtitle>
            </S.KeepSigned>
            {isError && <ErrorMessageAuth isError={isError} />}
            <S.SignIn type="submit">
              Sign In <LoaderInButton isLoading={isLoading} />
            </S.SignIn>
          </form>
          <S.Subtitle>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </S.Subtitle>
        </S.RightSide>
      </motion.div>
    </S.Page>
  );
};

export default Login;
