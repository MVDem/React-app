import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id, name, lastName } = useSelector(
    (state) => state.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
    name,
    lastName,
  };
}
