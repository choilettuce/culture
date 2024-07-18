// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchTourismData } from './TourismApi';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchTourismData();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="App">
      <h1>Tourism Information</h1>
      <ul>
        {data.map((item) => (
          <li key={item.contentid}>
            <h2>{item.title}</h2>
            <p>{item.addr1}</p>
            <img src={item.firstimage} alt={item.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;