import React, { useState } from 'react';

function Login({ history }) {
  const [name, setName] = useState('');

  const API_URL = process.env.REACT_APP_BASE_URL;
  
  function handleChange(e) {
    setName(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    });
    if (response.status === 201) {
      return history.push('/');
    }
    return history.push('/404');
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="input-name">
          Nome:
          <input
            type="text"
            placeholder="Seu nome"
            onChange={ handleChange }
            id="input-name"
          />
        </label>
      </form>
    </div>
  );
}

export default Login;
