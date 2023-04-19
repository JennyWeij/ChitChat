import { createContext, ReactNode, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

export interface AuthContextValue {
  isLoggedIn: boolean;
  username: string | null;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  login: () => void;
  logout: () => void;
}

const initialAuthValues: AuthContextValue = {
  isLoggedIn: false,
  username: null,
  setIsLoggedIn: () => {},
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextValue>(initialAuthValues);

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const login = () => {
    setIsLoggedIn(true);
    setUsername("John");
  };

  const logout = () => {
      setIsLoggedIn(false);
      setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}