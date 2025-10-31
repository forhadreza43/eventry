import { AuthUser } from "@/definition/definition";
import { createContext } from "react";

export const AuthContext = createContext<{
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
}>({
  user: null,
  setUser: () => {},
});
