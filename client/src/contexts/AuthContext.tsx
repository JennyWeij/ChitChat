import { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface AuthContextValue {
  isLoggedIn: boolean;
  username: string | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const initialAuthValues: AuthContextValue = {
  isLoggedIn: false,
  username: null,
  setIsLoggedIn: () => {},
  login: async (username: string, password: string) => {
    return false;
  },
  logout: () => {},
};

export const AuthContext = createContext<AuthContextValue>(initialAuthValues);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    //BEHÖVER HÅRDKODA ADRESSEN ANNARS BLIR DET FEL PORT
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Login successful:", data);
      setIsLoggedIn(true);
      setUsername("John");
      return true;
    } else {
      console.error("Login error:", data.message);
      return false;
    }

  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, setIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}


