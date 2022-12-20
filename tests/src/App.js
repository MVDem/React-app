import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExercisePage from './pages/ExercisePage';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import TestsList from './pages/TestsList';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import './styles/scss/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tests" element={<TestsList />} />
          <Route path="tests/:id" element={<ExercisePage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
