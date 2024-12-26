import React, { useState } from 'react';

const UserPost = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username, // quando o atributo e variavel são iguais, pode apenas deixar o atributo: "username,"
        email: email,
        password: password,
      }),
    })
      .then((resposta) => {
        console.log(resposta);
        return resposta.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        name="username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        placeholder="E-Mail"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />

      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
