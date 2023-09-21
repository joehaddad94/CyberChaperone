import React, { createContext, useContext, ReactNode, useState } from 'react';

interface User {
  token: string | null;
  username: string | null;
  email: string | null;
}

interface AuthContextType {
  user: User;
  saveUserInfo: (token: string, username: string, email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    token: null,
    username: null,
    email: null,
  });

  const saveUserInfo = (token: string, username: string, email: string) => {
    setUser({ token, username, email });
  };

  const logout = () => {
    setUser({ token: null, username: null, email: null });
  };

  return (
    <AuthContext.Provider value={{ user, saveUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
