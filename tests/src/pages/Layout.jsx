import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__appbar">
            <div className="header__controls">
              <NavLink to="/" className="header__btn">
                home
              </NavLink>
              <NavLink to="/tests" className="header__btn">
                Tests
              </NavLink>
            </div>
            <div className="header__controls">
              {/* <button className="header__btn">Login</button> */}
            </div>
          </div>
          <div className="header__sidebar"></div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__copy">
            <p>© 2021 MVDem.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
