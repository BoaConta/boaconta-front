import React, { useState } from 'react';
import Header from './Header';
import InputField from './InputField';
import PasswordField from './PasswordField';
import Checkbox from './Checkbox';
import Link from './Link';
import Button from './GoogleButton';
import Divider from './Divider';
import Warn from '../assets/ico/Warning.svg';
import '../assets/css/toaster.css'
import { toast } from 'react-toastify';

function notifyEmail() {
  toast.warn('E-mail inválido', {
    bodyStyle: {background: '#FFF4D6'},
    
    progressStyle: {background:'#803D00'},
    style: {background: '#FFF4D6', border: '1px solid #FCE07E', borderRadius: '0.5rem'},
    type: 'warning',
    icon: ({theme, type}) =>  <img src={Warn} alt='Warning alert icon'/>,
  })
  
}

function notifyPass() {
  toast.error('Senha inválida', {
    bodyStyle: {background: '#FFF4D6'},
    
    progressStyle: {background:'#803D00'},
    style: {background: '#FFF4D6', border: '1px solid #FCE07E', borderRadius: '0.5rem'},
    type: 'warning',
    icon: ({theme, type}) =>  <img src={Warn} alt='Warning alert icon'/>,
  })
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors] = useState({ email: '', password: '' });

  return (
    <div className="login-form">
      <Header />
      <div className="forms">
        <div className="forms-area">
          <div className="mb-3">
            <InputField
              label="E-mail"
              type="email"
              placeholder="mariareis@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          {/*Adicionei esses dois botões abaixo para testar o toaster 😁
            <button onClick={notifyEmail}>Notify !</button><br />
           <button onClick={notifyPass}>Notify !</button> */}
          <div className="mb-3">
            <PasswordField
              label="Senha"
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
        </div>
        <div id='options' className="options d-flex justify-content-between align-items-center mb-3">
          <Checkbox label="Manter conectado" />
          <Link text="Esqueci a senha" href="#" />
        </div>
        <Button text="Entrar" className="btn-login btn-primary w-100 mb-3" />
        <Divider text="ou" />
        <Button text="Entrar com Google" isGoogle className="g-btn btn btn-danger w-100 mb-3" />
        <p className="text-center">Ainda não tem conta? <Link text="Criar conta" href="#" /></p>
      </div>
    </div>
  );
};

export default LoginForm;
