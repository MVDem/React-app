import * as React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/SignUp';

export default function MainPage() {
  return (
    <>
      <section className="auth">
        <div className="login__wrapper">
          <h2 className="login__title">Register</h2>
          <SignIn />
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </>
  );
}
