import React, { createContext } from "react";
import api from "../services/api";

interface AuthContextData {
  signed: boolean;
  Login(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  async function Login() {
    const response = await api.post("/login", {
      email: "example@mail.com",
      password: "123456",
    });

    console.log(response);
  }
  return (
    <AuthContext.Provider value={{ signed: true, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
