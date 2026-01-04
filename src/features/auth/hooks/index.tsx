import { loginUser, signupUser } from '../services/authService';
import { AppDispatch } from '../../../store';
import { setCredentials } from '../../../store/slices/authSlice';

export const useAuth = () => {
  const dispatch = AppDispatch();

  const login = async (email: string, password: string) => {
    const res = await loginUser(email, password);
    dispatch(setCredentials(res));
  };

  const signup = async (email: string, password: string) => {
    const res = await signupUser(email, password);
    dispatch(setCredentials(res));
  };

  return { login, signup };
};
