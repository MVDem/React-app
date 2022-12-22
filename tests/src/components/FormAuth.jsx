import { useState } from 'react';

const FormAuth = ({ title, handleClickAuth }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

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
        onClick={() => handleClickAuth(email, pass)}
      >
        {title}
      </button>
    </div>
  );
};

export { FormAuth };
