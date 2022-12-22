import * as React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <div className="auth__main">
            <h2 className="auth__title">Login</h2>
            <Login />
            <div className="auth__links">
              <Link className="auth__link" to="#">
                Forgot password
              </Link>
              <Link className="auth__link" to="/register">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
