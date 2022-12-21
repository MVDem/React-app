import * as React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/SignUp';

export default function RegisterPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <h2 className="auth__title">Register</h2>
          <SignIn />
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </>
  );
}
