import React, { createContext, useContext, ReactNode, useState } from 'react';

interface User {
  token: string | null;
  username: string | null;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  profile_picture: string | null;
}

interface AuthContextType {
  user: User;
  saveUserInfo: (
    token: string, 
    username: string, 
    email: string, 
    first_name: string,
    last_name: string,
    profile_picture: string,
    ) => void;
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
    first_name: null,
    last_name: null,
    profile_picture: null,
  });

  const saveUserInfo = (
    token: string, 
    username: string, 
    email: string,
    first_name: string,
    last_name: string,
    profile_picture: string,
    ) => {
    setUser({ 
      token, 
      username, email, 
      first_name, 
      last_name, 
      profile_picture });
  };

  const logout = () => {
    setUser({ 
      token: null,
    username: null,
    email: null,
    first_name: null,
    last_name: null,
    profile_picture: null, 
  });
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
