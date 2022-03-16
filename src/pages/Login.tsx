import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginForm from '../components/login/LoginForm';
import Box from '../components/UI/Box';
import Button from '../components/UI/Button';
import useAuth from '../hooks/useAuth';

interface LocationState {
  from: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState | undefined;

  const handleLogin = (username: string) => {
    const targetPage = state?.from || '/';

    auth.login(username, () => {
      navigate(targetPage, { replace: true });
    });
  };

  return (
    <Box>
      <LoginForm onSubmit={handleLogin} />
    </Box>
  );
};

export default Login;
