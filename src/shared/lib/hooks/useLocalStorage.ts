import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';

import type { TDefaultValue } from './types';

const resolveDefault = <T>(defaultValue: TDefaultValue<T>): T =>
  typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue;

export const useLocalStorage = <T>(
  key: string,
  defaultValue: TDefaultValue<T>,
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return resolveDefault(defaultValue);
    }

    try {
      const saved = localStorage.getItem(key);

      if (saved !== null) {
        return JSON.parse(saved) as T;
      }

      return resolveDefault(defaultValue);
    } catch (err) {
      console.error('Ошибка чтения localStorage:', err);

      return resolveDefault(defaultValue);
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (err) {
        console.error('Ошибка записи localStorage:', err);
      }
    }
  }, [key, value]);

  return [value, setValue];
};
