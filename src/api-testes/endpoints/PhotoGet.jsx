import React, { useState } from 'react';

const PhotoGet = () => {
  const [id, setId] = useState(null);
  const [photo, setPhoto] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`)
      .then((resposta) => {
        console.log(resposta);
        console.log(id);
        return resposta.json();
      })
      .then((json) => {
        console.log(json);
        setPhoto(json.photo.src);
        return json;
      });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          onChange={({ target }) => setId(target.value)}
        />
        <button>Enviar</button>
      </form>
      {photo && <img src={photo} />}
    </>
  );
};

export default PhotoGet;
