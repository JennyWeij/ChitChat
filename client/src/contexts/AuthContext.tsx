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

  const getSession = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/users/session", {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const user = await response.json();
        setUsername(user.username);
        setIsLoggedIn(true);
      } else {
        console.error("Error fetching session:", await response.text());
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    }
  };

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.ok) {
      getSession();
      console.log(
        "Logging in with username:",
        username,
        "and password:",
        password
      );
      return true;
    } else {
      const data = await response.json();
      console.error("Login error:", data.message);
      return false;
    }
  };

  const logout = async () => {
    const response = await fetch("http://localhost:3000/api/users/logout", {
      method: "DELETE",
      credentials: "include",
    });

    if (response.ok) {
      setIsLoggedIn(false);
      setUsername(null);
    } else {
      const data = await response.json();
      console.error("Logout error:", data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, setIsLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
