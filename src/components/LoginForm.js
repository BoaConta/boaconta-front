import React, { useState } from 'react';
import Header from './Headerlogin';
import InputField from './InputField';
import PasswordField from './PasswordField';
import Checkbox from './Checkbox';
import Link from './Link';
import Button from './GoogleButton';
import Divider from './Divider';
import Warn from '../assets/ico/Warning.svg';
import '../assets/css/toaster.css';
import axios from 'axios';
import { toast } from 'react-toastify';

// Uni os dois toasters em um só para poder receber as mensagens do backend
function notify(message) {
  toast.warn(message, {
    bodyStyle: { background: '#FFF4D6' },
    progressStyle: { background: '#803D00' },
    style: { background: '#FFF4D6', border: '1px solid #FCE07E', borderRadius: '0.5rem' },
    icon: () => <img src={Warn} alt='Warning alert icon' />,
  });
}

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('https://boaconta-back-api-production.up.railway.app/api/v1/user/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      const value = error.response?.data?.message;
  
      // Verifica se `value` é uma string e notifica
      if (typeof value === 'string') {
        return notify(value);
      }
      
      // Verifica se `value` é um array e notifica cada item
      if (Array.isArray(value)) {
        value.forEach(message => {
          if (typeof message === 'string') {
            notify(message);
          }
        });
      } else {
        notify('Ocorreu um erro desconhecido. Por favor, tente novamente.'); // Mensagem genérica
      }
    }
  }

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
          </div>
          {/* Adicionei esse botão abaixo para testar o toaster 😁
            <button onClick={() => notify('Teste de notificação!')}>Notify !</button> */}
          <div className="mb-3">
            <PasswordField
              label="Senha"
              placeholder="**********"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div id='options' className="options d-flex justify-content-between align-items-center mb-3">
          <Checkbox label="Manter conectado" />
          <Link text="Esqueci a senha" href="#" />
        </div>
        <button onClick={login} className="btn-login btn-primary w-100 mb-3">Entrar</button>
        <Divider text="ou" />
        <Button text="Entrar com Google" isGoogle className="g-btn btn btn-danger w-100 mb-3" />
        <p className="text-center">Ainda não tem conta? <Link text="Criar conta" href="#" /></p>
      </div>
    </div>
  );
};

export default LoginForm;
