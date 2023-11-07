interface LoginFormProps {
  email: {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  showPassword: boolean;
  error: string;
  isLoading: boolean;
  isError: string | null;
  handleLoginClick: (e: React.MouseEvent<HTMLFormElement>) => void;
  setShowPassword: (show: boolean) => void;
  registration: boolean;
  name?: {
    value: string;
    clear: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}
export default LoginFormProps;
