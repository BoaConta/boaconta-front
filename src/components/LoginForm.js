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
      <div className="fields-area">
        <InputField label="E-mail" type="email" placeholder="mariareis@gmail.com" />
        <PasswordField label="Senha" placeholder="**********" />
      </div>
      <div className="options">
        <Checkbox label="Manter conectado" />
        <Link text="Esqueci a senha" href="#" />
      </div>
      <Button text="Entrar" />
      <Divider text="ou" />
      <Button text="Entrar com Google" isGoogle />
      <p className="create-account">Ainda não tem conta?
        <Link text="Criar conta" href="#" />
      </p>
    </div>
  );
};

export default LoginForm;