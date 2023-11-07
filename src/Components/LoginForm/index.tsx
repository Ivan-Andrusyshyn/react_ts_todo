import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoaderInButton from "../Loader/AuthLoader";
import ErrorMessageAuth from "../ErrorComponent";
import React from "react";
import LoginFormProps from "./types";

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  showPassword,
  error,
  isLoading,
  isError,
  handleLoginClick,
  setShowPassword,
  registration,
  name,
}) => {
  return (
    <form action="" onSubmit={handleLoginClick} data-testid="login-form">
      {registration && (
        <>
          <S.FieldName>Name</S.FieldName>
          <S.InputField
            data-testid="inputName"
            value={name && name.value}
            id="name"
            error={error}
            onChange={name && name.handleChange}
            placeholder={error ? `${error} name.` : "Create your name"}
          />
        </>
      )}
      <S.FieldName>Email</S.FieldName>
      <S.InputField
        data-testid="inputEmail"
        autoComplete="username"
        value={email.value}
        error={error}
        id="email"
        onChange={email.handleChange}
        placeholder={error ? `${error} email.` : "Insert your email"}
      />
      <S.FieldName>Password</S.FieldName>
      <div style={{ position: "relative" }}>
        <S.InputField
          data-testid="inputPassword"
          value={password.value}
          id="password"
          onChange={password.handleChange}
          placeholder={error ? `${error} password.` : "Insert your password"}
          type={showPassword ? "text" : "password"}
          error={error}
          autoComplete="current-password"
        />
        <S.IconsPasswordWrapper
          onClick={() => setShowPassword(!showPassword)}
          data-testid="passwordToggle"
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
      <S.SignIn type="submit" data-testid="btnLogin">
        {registration ? "Sign Up" : "Sign In"}
        <LoaderInButton loaderColor={"#fff"} isLoading={isLoading} />
      </S.SignIn>
    </form>
  );
};
export default LoginForm;
