import React from 'react';
import Header from './Header';
import InputField from './InputField';
import PasswordField from './PasswordField';
import Checkbox from './Checkbox';
import Link from './Link';
import Button from './Button';
import Divider from './Divider';

const LoginForm = () => {
  return (
    <div className="login-form">
      <Header />
      <div className="forms">
        <div className="forms-area">
          <div className="mb-3">
            <InputField label="E-mail" type="email" placeholder="mariareis@gmail.com" />
          </div>
          <div className="mb-3">
            <PasswordField label="Senha" placeholder="**********" /> 
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
