import {
  useContext,
  createContext,
  type PropsWithChildren,
  useMemo,
} from 'react';

import { useSecureStorage } from '@shared/ui';

const AuthContext = createContext<{
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

export const useSession = () => {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
};

export const SessionProvider = ({ children }: PropsWithChildren) => {
  const [[isLoading, session], setSession] = useSecureStorage('session');

  const value = useMemo(
    () => ({
      signIn: () => {
        // Perform sign-in logic here
        setSession('xxx');
      },
      signOut: () => {
        setSession(null);
      },
      session,
      isLoading,
    }),
    [isLoading, session, setSession]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
