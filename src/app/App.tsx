import React from 'react';
import { Header } from '../components/templates/Header';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Outlet />
    </>
  );
};

export default App;
