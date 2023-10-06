import React, { useState, createContext, useEffect } from "react";
import { ChildrenProps } from "./deleteContext";
import {
  createUserWithEmailAndPassword as firebaseCreateUser,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  updateProfile,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

export interface UserDataProps {
  email: string | null;
  userName: string | null;
}

export type AuthType = {
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

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUserData({
          email: user.email,
          userName: user.displayName,
        });
        localStorage.setItem("@Project:email", JSON.stringify(user.email));
      } else {
        setUserData(null);
        localStorage.removeItem("@Project:email");
      }
      setIsLoading(false);
    });
  }, []);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      await firebaseSignOut(auth);
      localStorage.removeItem("@Project:email");
      setUserData(null);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Error during login: " + error);
    } finally {
      setIsLoading(false);
    }
  };

  const registration = async (
    email: string,
    password: string,
    name: string
  ) => {
    setIsLoading(true);
    try {
      const userCredential = await firebaseCreateUser(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        signInWithGoogle,
        signOut,
        handleLogin,
        registration,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
