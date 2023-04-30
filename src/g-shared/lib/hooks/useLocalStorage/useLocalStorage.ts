import { useState } from 'react';

// Ф useLocalStorage использует localStorage, чтобы хранить значение переменной на стороне клиента.
//
// Она принимает два аргумента: ключ key, по которому будет храниться значение в localStorage, и начальное значение initialValue.
//
// Значение переменной хранится в состоянии storedValue, которое инициализируется с помощью функции useState, передаваемой начальное значение.
//
// Если localStorage доступен, функция попытается получить значение по заданному ключу key. Если такое значение есть, оно будет преобразовано из JSON с помощью JSON.parse и сохранено в состоянии storedValue. Если значения нет, то будет использовано начальное значение initialValue.
//
// Функция useLocalStorage возвращает кортеж из двух элементов: текущего значения переменной storedValue и функции setValue, которая обновляет это значение и сохраняет его в localStorage.
//
// Функция setValue принимает новое значение переменной и сохраняет его в состоянии storedValue, а затем сохраняет его в localStorage. Если передана функция, она вызывается с текущим значением переменной и результат сохраняется в состоянии и в localStorage.
//
// Возвращаемый кортеж помечен с помощью as const, чтобы TypeScript понимал, что значения кортежа не могут изменяться.

export function useLocalStorage<T>(key: string, initialValue: T) {
    const getStoredValue = () => {
        if (typeof window === 'undefined') return initialValue;

        try {
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    };

    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(getStoredValue);
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(valueToStore));
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };
    return [storedValue, setValue] as const;
}
