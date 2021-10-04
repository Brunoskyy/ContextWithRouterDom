import React, { createContext, useContext, useState } from "react";
import api from "../services/api";

type UserObject = {
  email: string;
  password: string;
};

type User = {
  user: UserObject;
};
interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function Login() {
    const response: User = {
      user: {
        email: "userteste",
        password: "teste",
      },
    };

    setUser(response.user);
    // @ts-expect-error
    api.defaults.headers.Authorization = `Bearer ${response.user.email}`;
    console.log(response);
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
