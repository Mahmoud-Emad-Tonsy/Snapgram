import { INewUser } from "./../../types/index";
import {
  SignOutAccount,
  createNewAccount,
  signInAccount,
} from "../appwrite/api";
import {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from "@tanstack/react-query";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createNewAccount(user),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: SignOutAccount,
  });
};
