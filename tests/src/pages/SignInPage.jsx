import * as React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/SignIn';

export default function SignInPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <div className="auth__main">
            <h2 className="auth__title">Login</h2>
            <SignIn />
            <div className="auth__links">
              <Link className="auth__link" to="#">
                Forgot password
              </Link>
              <Link className="auth__link" to="/signUp">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
