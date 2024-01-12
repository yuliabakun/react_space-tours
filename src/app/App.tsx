import React from 'react';
import { Header } from '../components/templates/Header';
import { Outlet } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Outlet />
    </div>
  );
};
