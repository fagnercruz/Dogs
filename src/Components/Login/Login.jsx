import { Navigate, Route, Routes } from 'react-router-dom';

import ApiTestes from '../../api-testes/ApiTestes';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPwdLost from './LoginPwdLost';
import LoginPwdReset from './LoginPwdReset';
import React, { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Login = () => {
  const {login} = useContext(UserContext);

  if(login === true) return <Navigate to="/conta" />
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/" element={<ApiTestes />} /> */}
        <Route path="create" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPwdLost />} />
        <Route path="resetar" element={<LoginPwdReset />} />
      </Routes>
    </div>
  );
};

export default Login;
