import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // Get initial value from localStorage or use initialValue
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  // Save to localStorage and state
  const setStoredValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue];
}

export default useLocalStorage;

//usage example
// const [name, setName] = useLocalStorage('name', 'Nikhil');