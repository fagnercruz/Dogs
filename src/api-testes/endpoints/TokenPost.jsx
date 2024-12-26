import React, { useState } from 'react';

const TokenPost = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, // quando o atributo e variavel são iguais, pode apenas deixar o atributo: "username,"
        password: password,
      }),
    })
      .then((resposta) => {
        console.log(resposta);
        return resposta.json();
      })
      .then((json) => {
        console.log(json.token);
        setToken(json.token);
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          name="username"
          onChange={({ target }) => setUsername(target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button>Enviar</button>
      </form>
      <br />
      <textarea
        name="token"
        id="token"
        value={token}
        disabled="disabled"
        cols="100"
        rows="5"
        placeholder="JWT Token"
      ></textarea>
    </>
  );
};

export default TokenPost;
