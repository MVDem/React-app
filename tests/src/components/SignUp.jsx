import { FormAuth } from './FormAuth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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

  return <FormAuth title="Sign up" handleClickAuth={handleRegister} />;
};

export default SignIn;
