import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { useContext, useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import * as S from "./styles";
import LoaderInButton from "../../Components/Loader/AuthLoader";
import { AuthType } from "../../Contexts/typesContext/authType";
import AnimatedContainerBottom from "../../Components/Animations/AnimationsPages/toBottom";
import AnimatedContainerTop from "../../Components/Animations/AnimationsPages/toTop";
import useInput from "../../hooks/useInput";
import LoginForm from "../../Components/LoginForm";

const SignUp = () => {
  const {
    registration,
    signInWithGoogle,
    isLoading,
    isLoadingGoogle,
    isError,
  } = useContext(AuthContext) as AuthType;
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

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
          <LoginForm
            email={email}
            password={password}
            showPassword={showPassword}
            error={error}
            isLoading={isLoading}
            isError={isError}
            handleLoginClick={handleSignUpClick}
            setShowPassword={setShowPassword}
            registration={true}
            name={name}
          />

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
