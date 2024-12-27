import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useContext } from 'react';

import ApiTestes from '../../api-testes/ApiTestes';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPwdLost from './LoginPwdLost';
import LoginPwdReset from './LoginPwdReset';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css';

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;

  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          {/* <Route path="/" element={<ApiTestes />} /> */}
          <Route path="create" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPwdLost />} />
          <Route path="resetar" element={<LoginPwdReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
