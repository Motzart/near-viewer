import { Near, keyStores } from 'near-api-js';
import NearWallet from '~services/NearWallet';

import getConfig from '../config';
const config = getConfig();

export const keyStore = new keyStores.BrowserLocalStorageKeyStore();

export const near = new Near({
  keyStore,
  headers: {},
  ...config,
});

export const wallet = new NearWallet(near, '');
