//import { useState } from 'react';
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CharacterContext } from './context/char-context';
import CharacterDetails from './components/CharacterDetails';
import './styles/App.css';
import './styles/Characters.css';
//import reactLogo from '/images/react.svg';
//import viteLogo from '/vite.svg'; // Correct path for files in the public folder

function Home() {
  const { characters, loading } = useContext(CharacterContext);

  console.log('👀 Characters in Home:', characters); // ✅ Debugging log

  if (loading) return <h2>Loading characters...</h2>;

  return (
    <div>
      <h1>Game of Thrones Characters</h1>
      <div className="characters-container">
        {characters.map((char) => (
          <div key={char.id} className="character-card">
            <Link
              to={`/details/${char.id}`}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <img src={char.imageUrl} alt={char.fullName} />
              <p>{char.fullName}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  console.log('✅ App component is rendering!'); // Debugging log
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

/*
    <>
      <div>
        <CharacterProvider>
          <App />
        </CharacterProvider>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
*/
