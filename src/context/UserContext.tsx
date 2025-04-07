import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextType {
  email: string;
  password: string;
  setUserData: (email: string, password: string) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setUserData = (email: string, password: string) => {
    setEmail(email);
    setPassword(password);
  };

  return (
    <UserContext.Provider value={{ email, password, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser: () => UserContextType = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}; 