import React, { useEffect, useState } from 'react';

function Home({ history }) {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);

  const API_URL = process.env.REACT_APP_BASE_URL;

  console.log(API_URL)

  useEffect(() => {
    async function getName() {
      try {
        const response = await fetch(`${API_URL}/user`);
        if (response.status === 200) {
          const { name } = await response.json();
          setName(name);
          return setLoading(true);
        }
        return history.push('/login');
      } catch (e) {
        return history.push('/404');
      }
    }
    getName()
  }, [API_URL, history]);

  if (loading) {
    <h1>Loading...</h1>
  }
  
  return (
    <div>
      <h1>
        Bem vindo
        {' '}
        {name}
      </h1>
    </div>
  );
}

export default Home;
