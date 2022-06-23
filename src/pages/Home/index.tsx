import React from 'react';
import { useTsx } from '~state/txs';
import { TxTable } from '~components/TxTable';

const Home = () => {
  const userTsx = useTsx();

  return (
    <>
      <h2>Home</h2>
      {userTsx && <TxTable txs={userTsx} />}
    </>
  )
}

export default Home;
