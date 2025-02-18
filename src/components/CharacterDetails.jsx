import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CharacterContext } from '../context/char-context';
import '../styles/CharacterDetails.css';

function CharacterDetails() {
  const { characterId } = useParams(); // Get characterId from URL
  const { characters } = useContext(CharacterContext); // Get character list from context

  console.log('🔍 CharacterDetails Rendering...');
  console.log('🔹 URL characterId:', characterId);
  console.log('🟢 Characters from Context:', characters);
  // Find the character with the matching ID
  const character = characters.find(
    (char) => char.id === parseInt(characterId)
  );

  if (!character) return <h2>Character not found</h2>;
  return (
    // ✅ This line is added to return the JSX
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>{character.fullName}</h1>
      <img
        className="char-photo"
        src={character.imageUrl}
        alt={character.fullName}
      />
      <p>
        <strong>First Name:</strong> {character.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {character.lastName}
      </p>
      <p>
        <strong>Title:</strong> {character.title}
      </p>
      <p>
        <strong>Family:</strong> {character.family}
      </p>
      <br />
      <Link
        to="/"
        style={{
          textDecoration: 'none',
          color: 'red',
          fontWeight: 'bold',
          fontSize: '1.2rem',
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default CharacterDetails;
