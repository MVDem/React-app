import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../components/hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../components/slices/userSlice';

export default function Layout() {
  const dispatch = useDispatch();
  const { isAuth, name } = useAuth();

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__appbar">
            <div className="header__controls">
              <NavLink to="/" className="header__btn">
                home
              </NavLink>
              {isAuth && (
                <NavLink to="/tests" className="header__btn">
                  Tests
                </NavLink>
              )}
            </div>
            <div className="header__controls">
              {isAuth ? (
                <div>
                  <button className="header__person">{name}</button>
                  <div className="header__dropdown">
                    <button
                      className="header__personbtn"
                      onClick={() => dispatch(removeUser())}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <NavLink to="/signIn" className="header__btn">
                  Login
                </NavLink>
              )}
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
            <p>© 2022 MVDem.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
