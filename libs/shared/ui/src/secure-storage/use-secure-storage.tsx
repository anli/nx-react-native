import * as React from 'react';

import * as SecureStore from 'expo-secure-store';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

const useAsyncState = <T,>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> => React.useReducer(
  (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
  initialValue
) as UseStateHook<T>;

const setStorageItemAsync = async (key: string, value: string | null) => {
  if (value == null) {
    await SecureStore.deleteItemAsync(key);
  } else {
    await SecureStore.setItemAsync(key, value);
  }
};

export const useSecureStorage = (key: string): UseStateHook<string> => {
  const [state, setState] = useAsyncState<string>();

  React.useEffect(() => {
    void SecureStore.getItemAsync(key).then(value => {
      setState(value);
    });
  }, [key, setState]);

  const setValue = React.useCallback(
    (value: string | null) => {
      setState(value);
      void setStorageItemAsync(key, value);
    },
    [key, setState]
  );

  return [state, setValue];
};
