import { useAuth } from '../contexts/AuthContext';
import TextButton from './TextButton';

export default function LoginLogoutButton() {
  const { isLoggedIn, login, logout } = useAuth();

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  return (
    <TextButton mode="light" onClick={handleClick}>
      {isLoggedIn ? 'Logout' : 'Login'}
    </TextButton>
  );
}