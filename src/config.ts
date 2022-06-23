const defaultEnv = process.env.NEAR_ENV || 'testnet';

export default function getConfig(env: string = defaultEnv) {
  switch (env) {
    case 'mainnet':
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net/',
        explorerUrl: 'https://explorer.mainnet.near.org',
        nearBlocksUrl: 'https://nearblocks.io',
        headers: {},
        USER_ACCOUNTS: [
          'motzart.near',
        ],
      };
    default:
      return {
        networkId: 'mainnet',
        nodeUrl: 'https://rpc.mainnet.near.org',
        walletUrl: 'https://wallet.near.org',
        helperUrl: 'https://helper.mainnet.near.org',
        indexerUrl: 'https://indexer.ref-finance.net/',
        explorerUrl: 'https://explorer.mainnet.near.org',
        nearBlocksUrl: 'https://nearblocks.io',
        headers: {},
        USER_ACCOUNTS: [
          'motzart2.testnet',
        ],
      };
  }
}
