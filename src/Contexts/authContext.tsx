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
import { AuthType, UserDataProps } from "./authType";

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
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    });
    return () => {
      localStorage.setItem("@Project:email", JSON.stringify(userData?.email));
    };
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
