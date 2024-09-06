import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FAKE_API } from '../config';
import useOnline from '../utils/useOnline';

const FetchDataPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the browser is online
    if (!navigator.onLine) {
    //   navigate('/offline'); // Redirect to an offline page or route
      return <h1> your are offline </h1>
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(FAKE_API);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        // Optionally navigate to an error route
        // navigate('/error');
        return <h1> Some API Error </h1>
      }
    };

    fetchData();
  }, [navigate]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchDataPage;
