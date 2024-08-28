import { useContext, createContext, type PropsWithChildren, useMemo } from 'react';

import { useSecureStorage } from '../secure-storage';

const AuthenticationContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function useAuthentication() {
  const value = useContext(AuthenticationContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuthentication must be wrapped in a <AuthenticationProvider />');
    }
  }

  return value;
}

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useSecureStorage('session');

  const value = useMemo(() => ({
    signIn: () => {
      setSession('xxx');
    },
    signOut: () => {
      setSession(null);
    },
    session,
    isLoading,
  }), [isLoading, session, setSession]);

  return (
    <AuthenticationContext.Provider
      value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
};
