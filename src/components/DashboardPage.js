import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data directly from your backend API
    fetch('http://localhost:4000/fetch-recipes/tomato/vegetarian')  // Update the URL to match your tested endpoint
      .then(response => {
        if (response.ok) {
          return response.text();  // Convert the response to text (since you're dealing with raw text data)
        } else {
          throw new Error('Error fetching recipes');
        }
      })
      .then(data => {
        setData(data);  // Set the raw data from the response
      })
      .catch(error => {
        setError('Error fetching recipes. Please try again later.');
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Display error message if any */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the raw data received from the API */}
      <h2>Raw Recipe Data</h2>
      <pre>{data}</pre>  {/* Output the raw data directly */}
    </div>
  );
};

export default Dashboard;
