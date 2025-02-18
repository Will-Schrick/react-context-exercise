import React, { createContext } from 'react';
import useFetchCharacters from '../hooks/use-char-fetch'; // Import the custom hook

// Create context
const CharacterContext = createContext();

// Create the provider component
const CharacterProvider = ({ children }) => {
  const { characters, loading } = useFetchCharacters(); // Use the custom hook

  return (
    <CharacterContext.Provider value={{ characters, loading }}>
      {children}
    </CharacterContext.Provider>
  );
};

// Export at the bottom
export { CharacterContext, CharacterProvider };
