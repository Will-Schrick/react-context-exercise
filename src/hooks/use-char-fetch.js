import { useState, useEffect } from 'react';

const useFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('🌐 Fetching data from API...'); // ✅ Debugging message
    fetch('https://thronesapi.com/api/v2/Characters')
      .then((response) => response.json())
      .then((data) => {
        console.log('✅ API Data:', data); // ✅ Log the data
        setCharacters(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
        setLoading(false);
      });
  }, []);

  return { characters, loading };
};

export default useFetchCharacters;
