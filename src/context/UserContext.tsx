import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  email: string;
  password: string;
}

interface UserContextType {
  currentUser: User | null;
  users: User[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkUserExists: (email: string) => Promise<boolean>;
}

const USER_STORAGE_KEY = 'origami_hr_users';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(users));
    }
  }, [users]);

  const register = async (email: string, password: string): Promise<boolean> => {
    const userExists = await checkUserExists(email);
    if (userExists) {
      return false;
    }

    const newUser = { email, password };
    setUsers(prevUsers => [...prevUsers, newUser]);

    setCurrentUser(newUser);
    return true;
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const checkUserExists = async (email: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userExists = users.some(user => user.email.toLowerCase() === email.toLowerCase());
        resolve(userExists);
      }, 300);
    });
  };

  return (
    <UserContext.Provider value={{ currentUser, users, login, register, logout, checkUserExists }}>
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