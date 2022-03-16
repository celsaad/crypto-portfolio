import React, { useState } from 'react';
import { fakeAuthProvider } from '../api/auth';

export type AuthenticationContextObj = {
  user: string | null;
  login: (user: string | null, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
};

export const AuthenticationContext =
  React.createContext<AuthenticationContextObj>({
    user: null,
    login: () => {},
    logout: () => {},
  });

const AuthenticationContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string | null, callback: VoidFunction) => {
    fakeAuthProvider.signin(() => {
      setUser(user);
      callback();
    });
  };

  const logout = (callback: VoidFunction) => {
    fakeAuthProvider.signout(() => {
      setUser(null);
    });
  };

  const contextValue: AuthenticationContextObj = {
    user,
    login,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContextProvider;
