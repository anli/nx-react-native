import { useState, useCallback } from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { supabase } from '@shared/lib';
import invariant from 'tiny-invariant';

invariant(
  process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_WEB_CLIENT_ID,
  'EXPO_PUBLIC_GOOGLE_SIGNIN_WEB_CLIENT_ID is not set'
);
invariant(
  process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_IOS_CLIENT_ID,
  'EXPO_PUBLIC_GOOGLE_SIGNIN_IOS_CLIENT_ID is not set'
);

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_WEB_CLIENT_ID,
  iosClientId: process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_IOS_CLIENT_ID,
});

export const useGoogleAuth = () => {
  const [isLoading] = useState(false);

  const signIn = useCallback(async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();

    if (!idToken) return;

    await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });
  }, []);

  const signOut = useCallback(async () => {
    await Promise.all([supabase.auth.signOut(), GoogleSignin.signOut()]);
  }, []);

  return {
    isLoading,
    signOut,
    signIn,
  };
};
