import React, { createContext, useEffect, useState } from 'react'
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserStorage = ({children}) => {

   const [data, setData] = useState(null);
   const [login, setLogin] = useState(null); // estado reativo para usuario logado
   const [loading, setLoading] = useState(false); // estado reativo para o carregamento
   const [error, setError] = useState(null); // estado reativo para erro no carregamento do usuário
   const navigate = useNavigate();

   useEffect(() => {
    async function autoLogin(){
        const token  = window.localStorage.getItem('token');
        if(token){
            try {
                setError(null);
                setLoading(true);
                const {url, options} = TOKEN_VALIDATE_POST(token);
                const response = await fetch(url,options);
                if(!response.ok) throw new Error("Token inválido");
                // como autologin é apenas para validar o token e puxar o usuario basta chamar a função agora
                await getUser(token);
            } catch (error) {
                userLogout();
            } finally {
                setLoading(false);
            }
        }

    }
    autoLogin();
   }, [])

    async function getUser(token){
        const {url, options} = GET_USER(token);
        const response = await fetch(url,options);
        const json = await response.json()
        setData(json)
        setLogin(true)
    }

    async function userLogout(){
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
        window.localStorage.removeItem('token');
        navigate("/login")
    }

    async function userLogin(username, password){
        try {
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password});
            const tokenRes = await fetch(url,options);
            if(!tokenRes.ok) {
                throw new Error(`Erro: ${tokenRes.status}`);
            }
            const {token} = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta')
        } catch (err) {
            setError(err.message)
            setLogin(false);
        } finally {
            setLoading(false);
        }  
   }

  return (
    <UserContext.Provider value={{userLogin, data, userLogout, error, loading, login}}>
        {children}
    </UserContext.Provider>
  )
}

