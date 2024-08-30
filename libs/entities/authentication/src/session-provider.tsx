import {
  useContext,
  createContext,
  type PropsWithChildren,
  useMemo,
} from 'react';

import { useFirebaseAuth } from './use-firebase-auth';

const AuthContext = createContext<{
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  session?: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}>({
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  session: null,
  isLoading: false,
  isAuthenticated: false,
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
  const { isLoading, data: user, signIn, signOut } = useFirebaseAuth();
  const isAuthenticated = !!user;

  const value = useMemo(
    () => ({
      signIn: async () => {
        await signIn();
      },
      signOut: async () => {
        await signOut();
      },
      isLoading,
      isAuthenticated,
    }),
    [isAuthenticated, isLoading, signIn, signOut]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
