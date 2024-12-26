import { Link, NavLink } from 'react-router-dom';

import Dog from '../Assets/dogs.svg?react'; // usado a partir da versão 4 do vite-plugin-svgr
import React, { useContext } from 'react';
import style from './Header.module.css';
import { UserContext } from '../UserContext';

// import { ReactComponent as Dog } from '../Assets/dogs.svg'; - modo antigo

const Header = () => {
  const {data} = useContext(UserContext);
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <NavLink to="/" aria-label="Dogs - Home" className={style.logo}>
          <Dog />
        </NavLink>
        {data ? <NavLink to="/conta" className={style.login}>
          Olá {data.nome} | Minha Conta
        </NavLink> :  <NavLink to="/login" className={style.login}>
          Login / Criar
        </NavLink> }
       
      </nav>
    </header>
  );
};

export default Header;
