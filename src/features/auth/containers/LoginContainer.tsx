import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import { useAuth } from '../hooks';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const LoginContainer = ({ isOpen, onClose }: Props) => {
  const { login, signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = async () => {
    if (isSignup) {
      await signup(email, password);
    } else {
      await login(email, password);
    }
  };

  return (
    <LoginModal
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={() => handleSubmit()}
      email={email}
      password={password}
      isSignup={isSignup}
      setEmail={setEmail}
      setPassword={setPassword}
      setIsSignup={setIsSignup}
    />
  );
};

export default LoginContainer;
