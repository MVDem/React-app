import * as React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <h2 className="auth__title">Login</h2>
          <Login />
          <Link to="/register">Register</Link>
        </div>
      </section>
    </>
  );
}
