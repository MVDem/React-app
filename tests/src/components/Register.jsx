import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/hooks/use-auth';
import { setUserPerson } from './slices/userSlice';
import { setData } from '../firebase';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const { id, email } = useAuth();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = {
    userEmail: email,
    userId: id,
    userName: name,
    userLastName: lastName,
  };

  const handleRegister = (name, lastName) => {
    dispatch(
      setUserPerson({
        name: name,
        lastName: lastName,
      })
    );
    setData(`users/${id}`, userData);
    navigate('/tests');
  };

  return (
    <div className="formAuth">
      <div className="formAuth__box">
        <input
          type="text"
          required="required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Name</span>
        <i></i>
      </div>
      <div className="formAuth__box">
        <input
          type="text"
          required="required"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <span>Last Name</span>
        <i></i>
      </div>
      <button
        className="formAuth__btn"
        onClick={() => handleRegister(name, lastName)}
      >
        Register
      </button>
    </div>
  );
};

export default Register;
