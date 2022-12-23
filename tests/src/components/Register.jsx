import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserPerson } from './slices/userSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (name, lastName) => {
    dispatch(
      setUserPerson({
        name: name,
        lastName: lastName,
      })
    );
    navigate('/');
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
