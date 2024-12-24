import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (name: string, email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    // Mock login - replace with real authentication
    setUser({
      id: '1',
      name: 'John Doe',
      email: email,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const register = (name: string, email: string, password: string) => {
    // Mock registration - replace with real authentication
    setUser({
      id: '1',
      name: name,
      email: email,
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}