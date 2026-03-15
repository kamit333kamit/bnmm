import { createMMKV } from 'react-native-mmkv';

// Default instance
export const mmkv = createMMKV()

export const storage = {
  setItem: (key: string, value: string) => {
    mmkv.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = mmkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    mmkv.remove(key);
    return Promise.resolve();
  },
};