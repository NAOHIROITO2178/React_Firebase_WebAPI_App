import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaData = () => { 
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=dRqmPCyhhN9XVmrXJbLp80ms2Qwf7CM9Tju2W1bh`
        );
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <img src={data.url} alt={data.title} style={{ maxWidth: '100%' }} />
      <p>{data.explanation}</p>
    </div>
  );
};

export default NasaData;
