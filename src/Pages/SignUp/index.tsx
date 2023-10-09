import { Link } from "react-router-dom";
import AuthContext from "../../Contexts/authContext";
import { useContext, useState } from "react";
import Logo from "../../Img/Logo.png";
import * as S from "./styles";
import LoaderInButton from "../../Components/AuthLoader/AuthLoader";
import { AuthType } from "../../Contexts/typesContext/authType";
import ErrorMessageAuth from "../../Components/ErrorComponent";
import { Loader } from "../../Components/Loader/styles";

const SignUp = () => {
  const { registration, signInWithGoogle, isLoading, setIsError, isError } =
    useContext(AuthContext) as AuthType;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setIsError("Please fill in all fields.");
      return;
    }
    registration(email, password, name);
  };

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
        <form action="" onSubmit={handleSignUpClick}>
          <S.FieldName>Name</S.FieldName>
          <S.InputField
            value={name}
            id="name"
            onChange={handleNameChange}
            placeholder="Create your name"
          ></S.InputField>
          <S.FieldName>Email</S.FieldName>
          <S.InputField
            value={email}
            id="email"
            autoComplete="username"
            onChange={handleEmailChange}
            placeholder="Insert your email"
          ></S.InputField>
          <S.FieldName>Password</S.FieldName>
          <S.InputField
            value={password}
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
            placeholder="Insert your password"
            type="password"
          ></S.InputField>
          <S.KeepSigned>
            <S.Checkbox />
            <S.Subtitle>Remember me</S.Subtitle>
          </S.KeepSigned>
          {isError && <ErrorMessageAuth isError={isError} />}
          <S.SignIn type="submit" disabled={isLoading}>
            Sign Up
            <LoaderInButton isLoading={isLoading} />
          </S.SignIn>
        </form>
        <S.Subtitle>
          Already have an account? <Link to="/login">Sign In</Link>
          <br />
          <S.Google_Btn onClick={signInWithGoogle}>
            Sign Up with Google
          </S.Google_Btn>
        </S.Subtitle>
      </S.RightSide>
    </S.Page>
  );
};

export default SignUp;