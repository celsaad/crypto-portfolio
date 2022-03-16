import { useContext } from 'react';
import {
  AuthenticationContext,
  AuthenticationContextObj,
} from '../context/authentication-context';

const useAuth = () =>
  useContext<AuthenticationContextObj>(AuthenticationContext);

export default useAuth;
