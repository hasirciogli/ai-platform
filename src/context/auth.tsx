"use client"

import { createContext, useContext, useState } from "react";
import { User } from "../models/user";
import * as React from "react";
import { signInAction } from "./actions";
export type AuthContextType = {
  user: User | undefined;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  user: undefined,
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | undefined>(undefined);


  const signIn = async (email: string, password: string) => {
    const user = await signInAction(email, password);
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
