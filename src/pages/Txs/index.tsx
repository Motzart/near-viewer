import React from 'react';
import { useParams } from 'react-router-dom';

const Txs = () => {
  const params = useParams();

  return (
    <>
      <h2>Tsx</h2>
      <p>{params.txId}</p>
    </>
  )
}

export default Txs;
