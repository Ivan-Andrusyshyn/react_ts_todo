import * as S from "./styles";
const ErrorMessageAuth: React.FC<{ isError: string | null }> = ({
  isError,
}) => {
  return <S.ErrorMessage data-testid="error-message">{isError}</S.ErrorMessage>;
};

export default ErrorMessageAuth;
