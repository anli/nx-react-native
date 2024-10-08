import { useCallback, useEffect, useReducer } from 'react';

import * as SecureStore from 'expo-secure-store';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

const useAsyncState = <T,>(
  initialValue: [boolean, T | null] = [true, null]
): UseStateHook<T> =>
  useReducer(
    (
      state: [boolean, T | null],
      action: T | null = null
    ): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>;

export async function setStorageItemAsync(key: string, value: string | null) {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
}

export const useSecureStorage = (key: string): UseStateHook<string> => {
  const [state, setState] = useAsyncState<string>();

  useEffect(() => {
    void SecureStore.getItemAsync(key).then((value) => {
      setState(value);
    });
  }, [key, setState]);

  // Set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value);
      void setStorageItemAsync(key, value);
    },
    [key, setState]
  );

  return [state, setValue];
};
