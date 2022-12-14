import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExercisePage from './pages/ExercisePage';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import TestsList from './pages/TestsList';
import SingIn from './pages/SignInPage';
import SignUp from './pages/SignUpPage';
import Register from './pages/RegisterPage';
import { RequireAuth } from './components/hok/RequireAuth';
import './styles/scss/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="tests"
            element={
              <RequireAuth>
                <TestsList />
              </RequireAuth>
            }
          />
          <Route
            path="tests/:id"
            element={
              <RequireAuth>
                <ExercisePage />
              </RequireAuth>
            }
          />
          <Route path="signIn" element={<SingIn />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="signUp/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
