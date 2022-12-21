import { FormAuth } from './FormAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    console.log(auth);
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return <FormAuth title="Sign in" handleClickAuth={handleLogin} />;
};

export default Login;
