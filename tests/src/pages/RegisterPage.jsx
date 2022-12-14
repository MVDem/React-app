import * as React from 'react';
import { Link } from 'react-router-dom';
import Register from '../components/Register';

export default function RegisterPage() {
  return (
    <>
      <section className="auth">
        <div className="auth__wrapper">
          <div className="auth__main">
            <h2 className="auth__title">Person</h2>
            <Register />
            <div className="auth__links">
              <Link className="auth__link" to="#">
                License
              </Link>
              <Link className="auth__link" to="#">
                Skip
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
