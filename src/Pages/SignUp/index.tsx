import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import * as S from "./styles";
import LoaderInButton from "../../Components/Loader/AuthLoader";
import { AuthType } from "../../Contexts/typesContext/authType";
import ErrorMessageAuth from "../../Components/ErrorComponent";
import AnimatedContainerBottom from "../../Components/Animations/AnimationsPages/toBottom";
import AnimatedContainerTop from "../../Components/Animations/AnimationsPages/toTop";
import useInput from "../../hooks/useInput";

const SignUp = () => {
  const {
    registration,
    signInWithGoogle,
    isLoading,
    isLoadingGoogle,
    isError,
  } = useContext(AuthContext) as AuthType;
  const [error, setError] = useState<string>("");
  const name = useInput("");
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

  const handleSignUpClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please enter");
      return;
    }
    registration(email.value, password.value, name.value);
  };

  return (
    <S.Page data-testid="signUpPage">
      <AnimatedContainerBottom>
        <S.LeftSide>
          <S.Img src={Logo}></S.Img>
        </S.LeftSide>
      </AnimatedContainerBottom>

      <AnimatedContainerTop>
        <S.RightSide>
          <S.Title>Welcome to Tasker</S.Title>
          <S.Subtitle>
            Please, insert your information to access your tasks.
          </S.Subtitle>
          <form action="" onSubmit={handleSignUpClick}>
            <S.FieldName>Name</S.FieldName>
            <S.InputField
              data-testid="inputName"
              value={name.value}
              id="name"
              error={error}
              onChange={name.handleChange}
              placeholder={error ? `${error} name.` : "Create your name"}
            ></S.InputField>
            <S.FieldName>Email</S.FieldName>
            <S.InputField
              data-testid="inputEmail"
              value={email.value}
              id="email"
              error={error}
              autoComplete="username"
              onChange={email.handleChange}
              placeholder={error ? `${error} email.` : "Insert your email"}
            />
            <S.FieldName>Password</S.FieldName>
            <S.InputField
              data-testid="inputPassword"
              value={password.value}
              id="password"
              error={error}
              autoComplete="current-password"
              onChange={password.handleChange}
              placeholder={
                error ? `${error} password.` : "Insert your password"
              }
              type={"password"}
            />

            <S.KeepSigned>
              <S.Checkbox />
              <S.Subtitle>Remember me</S.Subtitle>
            </S.KeepSigned>
            {isError && (
              <ErrorMessageAuth isError={isError} data-testid="error-message" />
            )}
            <S.SignIn
              data-testid="btnRegister"
              type="submit"
              disabled={isLoading}
            >
              Sign Up
              <LoaderInButton loaderColor={"#fff"} isLoading={isLoading} />
            </S.SignIn>
          </form>
          <S.Subtitle>
            Already have an account? <Link to="/login">Sign In</Link>
            <br />
            <S.Google_Btn onClick={signInWithGoogle}>
              {isLoadingGoogle ? (
                <LoaderInButton
                  loaderColor={"#000"}
                  isLoading={isLoadingGoogle}
                />
              ) : (
                "Sign Up with Google"
              )}
            </S.Google_Btn>
          </S.Subtitle>
        </S.RightSide>
      </AnimatedContainerTop>
    </S.Page>
  );
};

export default SignUp;
