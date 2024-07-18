import React, { useEffect, useState } from 'react';
import { fetchPublicData } from './api';

function Main() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cors = require("cors");

  
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchPublicData();
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
      <h1>Public Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Main;