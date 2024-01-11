import React from 'react';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="App">
      <h1>My react app</h1>

      <Outlet />
    </div>
  );
}
