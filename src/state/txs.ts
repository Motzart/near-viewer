import { useEffect, useState } from 'react';
import { getAccountTransactions } from '~services/api';
import getConfig from '~config';

export const DEFAULT_PAGE_LIMIT = 25;

const config = getConfig();
const USER_ID = config.USER_ACCOUNTS[0];

export const useTsx = (
  limit = DEFAULT_PAGE_LIMIT,
  offset = 0,
) => {
  const [txs, setTxs] = useState<any>(null);
  useEffect(() => {
    getAccountTransactions(USER_ID, limit, offset).then(data => {
        console.log('txs data', data);
      setTxs(data);
      }
    )

  }, [])
  return txs;
}
