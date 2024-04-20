/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

interface AuthUser {
  _id: string;
  username: string;
  fullName: string;
  profilePic: string;
}

interface AuthContextType {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
};

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storedUser = localStorage.getItem("chat-user");
  const [authUser, setAuthUser] = useState<AuthUser | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}
