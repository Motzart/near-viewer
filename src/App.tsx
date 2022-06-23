import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '~routes';
import Layout from '~layouts/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
