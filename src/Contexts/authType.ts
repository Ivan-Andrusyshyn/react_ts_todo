interface UserDataProps {
  email: string | null;
  userName: string | null;
}

type AuthType = {
  userData: UserDataProps | null;
  setUserData: (data: UserDataProps) => void;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  handleLogin: (email: string, password: string) => Promise<void>;
  registration: (
    email: string,
    password: string,
    name: string
  ) => Promise<void>;
  isLoading: boolean;
};
export type { AuthType, UserDataProps };
