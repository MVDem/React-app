import { useState } from 'react';

const FormAuth = ({ title, handleClickAuth }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <form className="formAuth">
      <input
        className="formAuth__textBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        className="formAuth__textBox"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      ></input>
      <button
        className="formAuth__btn"
        onClick={() => handleClickAuth(email, pass)}
      >
        {title}
      </button>
    </form>
  );
};

export { FormAuth };
