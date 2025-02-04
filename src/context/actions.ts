"use server";

import { AuthService } from "../services/auth";

export const signInAction = async (email: string, password: string) => {
  const user = await AuthService.signIn(email, password);
  return user;
};
