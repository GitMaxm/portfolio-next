import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        if (typeof window === 'undefined') return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        try {
            const saved = localStorage.getItem(key);
            if (saved !== null) return JSON.parse(saved);
            return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        } catch (err) {
            console.error('Ошибка чтения localStorage:', err);
            return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
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
