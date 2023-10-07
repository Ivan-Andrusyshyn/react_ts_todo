import React, { useState, createContext, useEffect } from "react";
import { ChildrenProps } from "./delete_edit_Context";
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
import { AuthType, UserDataProps } from "./typesContext/authType";

const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUserData({
          email: user.email,
          userName: user.displayName,
        });
        localStorage.setItem("@Project:email", JSON.stringify(user?.email));
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    const errorTimeout = setTimeout(() => {
      setIsError(null);
    }, 2000);
    return () => clearTimeout(errorTimeout);
  }, [isError]);
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
      setIsError("Error during login: " + error);
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
      setIsError("Error during registration: " + error);
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
        isError,
        setIsError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
