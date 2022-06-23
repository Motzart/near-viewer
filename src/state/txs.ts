import { useEffect, useState } from 'react';
import { getAccountTransactions } from '~services/api';

export const DEFAULT_PAGE_LIMIT = 25;


export const useTsx = (
  limit = DEFAULT_PAGE_LIMIT,
  offset = 0,
) => {
  const [txs, setTxs] = useState<any>(null);
  useEffect(() => {
    getAccountTransactions('oyaniuk-pem.near', limit, offset).then(data => {
        console.log('txs data', data);
      setTxs(data);
      }
    )

  }, [])
  return txs;
}
