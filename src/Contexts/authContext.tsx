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
  signInWithGoogle: () => void;
  signOut: () => void;
  handleLogin: (email: string, password: string) => void;
  registration: (email: string, password: string, name: string) => void;
};

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataProps | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
    });
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      localStorage.removeItem("@Project:email");
      setUserData(null);
    } catch (error) {
      throw error;
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
    } catch (error) {
      if (error) alert("Error during login: " + error);
    }
  };

  const registration = async (
    email: string,
    password: string,
    name: string
  ) => {
    try {
      const userCredential = await firebaseCreateUser(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
    } catch (error) {
      throw error;
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
