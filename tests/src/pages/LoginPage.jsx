import * as React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function MainPage() {
  return (
    <>
      <section className="login">
        <div className="login__wrapper">
          <h2 className="login__title">Login</h2>
          <Login />
          <Link to="/register">Register</Link>
        </div>
      </section>
    </>
  );
}
