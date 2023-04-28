import './App.css';
import React, { useState, useEffect } from 'react';

const useDataFetching = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

function UserList() {
  const [data] = useDataFetching('https://jsonplaceholder.typicode.com/users');

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }


  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <UserList />
  );
}

export default App;
