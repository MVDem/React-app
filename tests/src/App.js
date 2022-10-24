import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExercisePage from './pages/ExercisePage';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import TestsList from './pages/TestsList';
import './styles/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="tests" element={<TestsList />} />
          <Route path="tests/:id" element={<ExercisePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
