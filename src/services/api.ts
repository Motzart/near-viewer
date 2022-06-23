
import getConfig from '../config';
const config = getConfig();

export interface ITx {
  block_timestamp: number,
  deposit_value: string,
  from: string,
  height: number
  included_in_block_hash: string,
  to: string,
  transaction_fee: string,
  transaction_hash: string,
  type: string,
}

export const getAccountTransactions = async (
  accountId: string,
  limit: number,
  offset: number
): Promise<ITx[]> => {
  return await fetch(
    config.nearBlocksUrl +
    `/api/account/txns?address=${accountId}&limit=${limit}&offset=${offset}`,
    {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }
  )
    .then((res) => res.json())
    .then((transactions) => {
      return transactions.txns;
    })
    .catch(() => {
      return [];
    });
};
