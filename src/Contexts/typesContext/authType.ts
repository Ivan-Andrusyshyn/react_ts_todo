interface UserDataProps {
  email: string | null;
  userName: string | null;
}

type AuthType = {
  isError: string | null;
  userData: UserDataProps | null;
  setUserData: (data: UserDataProps) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  handleLogin: (email: string, password: string) => Promise<void>;
  setIsError: (arg: string | null) => void;
  registration: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  isLoading: boolean;
  changeUserName: (newName: string) => void;
  isLoadingGoogle: boolean;
};
export type { AuthType, UserDataProps };
