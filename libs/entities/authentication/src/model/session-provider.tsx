import {
  useContext,
  createContext,
  type PropsWithChildren,
  useMemo,
  useEffect,
  useState,
} from 'react';

import { supabase } from '@shared/lib';
import { Session } from '@supabase/supabase-js';

import { useGoogleAuth } from './use-google-auth';

const AuthContext = createContext<{
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  data?: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}>({
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
  data: null,
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
  const { isLoading, signIn, signOut } = useGoogleAuth();
  const [session, setSession] = useState<Session | null>(null);
  const isAuthenticated = !!session;

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
    });

    supabase.auth.onAuthStateChange((_event, data) => {
      setSession(data);
    });
  }, []);

  const value = useMemo(
    () => ({
      signIn: async () => {
        await signIn();
      },
      signOut,
      isLoading,
      isAuthenticated,
      data: session,
    }),
    [isAuthenticated, isLoading, signIn, signOut, session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
