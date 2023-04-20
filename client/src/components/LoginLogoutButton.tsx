import { useAuth } from '../contexts/AuthContext';
import TextButton from './TextButton';

export default function LoginLogoutButton() {
  const { isLoggedIn, login, logout } = useAuth();

  const handleClick = () => {
    if (isLoggedIn) {
      logout();
    } 
  };

  return (
    <>
    {isLoggedIn && (
      <TextButton mode="light" onClick={handleClick}>
        Logout
      </TextButton>
    )}
  </>
  );
}