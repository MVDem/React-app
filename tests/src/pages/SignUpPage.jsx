import * as React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

export default function SignUpPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <div className="auth__main">
            <h2 className="auth__title">Register</h2>
            <SignUp />
            <div className="auth__links">
              <Link className="auth__link" to="#">
                Forgot password
              </Link>
              <Link className="auth__link" to="/signIn">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
