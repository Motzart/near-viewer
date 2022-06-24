import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '~layouts/Layout';
import Home from '~pages/Home';
import Account from '~pages/Account';
import Txs from '~pages/Txs';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/txs" element={<Txs />} >
          <Route path=":txId" element={<Txs />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
