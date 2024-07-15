import React, { useState } from 'react';
import Header from './Header';
import InputField from './InputField';
import PasswordField from './PasswordField';
import Checkbox from './Checkbox';
import Link from './Link';
import Button from './Button';
import Divider from './Divider';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    setErrors({ email: '', password: '' });

    const response = await fetch('URL_DO_SEU_BACKEND/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (data.error) {
      if (data.error === 'EMAIL_NOT_FOUND') {
        setErrors(prevErrors => ({ ...prevErrors, email: 'E-mail não encontrado.' }));
      } else if (data.error === 'INVALID_PASSWORD') {
        setErrors(prevErrors => ({ ...prevErrors, password: 'Senha incorreta.' }));
      }
    } else {
      // Lógica para sucesso do login
      console.log('Login bem-sucedido');
    }
  };

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
        <Button text="Entrar" className="btn-login btn-primary w-100 mb-3" onClick={handleLogin} />
        <Divider text="ou" />
        <Button text="Entrar com Google" isGoogle className="g-btn btn btn-danger w-100 mb-3" />
        <p className="text-center">Ainda não tem conta? <Link text="Criar conta" href="#" /></p>
      </div>
    </div>
  );
};

export default LoginForm;
