import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setUser } from './slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
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

  return (
    <div className="formAuth">
      <div className="formAuth__box">
        <input
          type="text"
          required="required"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Email</span>
        <i></i>
      </div>
      <div className="formAuth__box">
        <input
          type="password"
          required="required"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <span>Password</span>
        <i></i>
      </div>
      <button
        className="formAuth__btn"
        onClick={() => handleLogin(email, pass)}
      >
        Sign in
      </button>
    </div>
  );
};

export default SignIn;
