import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { CharacterProvider } from './context/char-context'; // Import CharacterProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CharacterProvider>
      {' '}
      {/* ✅ Wrap App in CharacterProvider */}
      <App />
    </CharacterProvider>
  </StrictMode>
);
