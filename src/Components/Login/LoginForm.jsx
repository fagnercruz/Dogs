import React, { useContext, useEffect, useState } from 'react';

import Button from '../Forms/Button';
import Input from '../Forms/Input';
// import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
// import { TOKEN_POST , GET_USER} from '../../api';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  // const [username, setUsername] = useState();
  // const [password, setPass] = useState();

  // Usando agora o hook personalizado
  const username = useForm();
  const password = useForm();

  const {userLogin, error, loading} = useContext(UserContext);

  // desnecessario depois de implementar o usercontext
  // useEffect(() => {
  //   const token = window.localStorage.getItem('token')
  //   if(token){
  //     getUser(token)
  //   }
  // },[])
  
  // desnecessario depois de implementar o usercontext
  // async function getUser(token){
  //   const {url, options} = GET_USER(token);
  //   const response = await fetch(url,options)
  //   const json = await response.json()
  //   console.log(json);
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)

      // desnecessário depois de implementar o UserContext
      // const {url, options} = TOKEN_POST({username: username.value, password:  password.value})

      // desnecessário depois de implemtntar o api.jsx
      // fetch(url, options)
      //   .then((resposta) => {
      //     console.log(resposta);
      //     console.log(username, password);
      //     return resposta.json();
      //   })
      //   .then((json) => {
      //     console.log(json);
      //     console.log(JSON.stringify({ username, password }));
      //   });

      // desnecessário depois de implementar o UserContext
      // const response = await fetch(url,options);
      // const json = await response.json();
      // window.localStorage.setItem('token', json.token);
      // getUser(json.token);
      // console.log(json);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>wait...</Button> : <Button>Entrar</Button>}
        
       
      </form>
    </div>
  );
};

export default LoginForm;
