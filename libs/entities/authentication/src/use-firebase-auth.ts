import { useState, useEffect, useCallback } from 'react';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: process.env.EXPO_PUBLIC_GOOGLE_SIGNIN_WEB_CLIENT_ID,
});

export const useFirebaseAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const onAuthStateChanged = useCallback(
    (_user: FirebaseAuthTypes.User | null) => {
      setUser(_user);
      if (isLoading) setIsLoading(false);
    },
    [isLoading]
  );

  const signIn = useCallback(async () => {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }, []);

  const signOut = useCallback(() => auth().signOut(), []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return {
    isLoading,
    data: user,
    signOut,
    signIn,
  };
};
