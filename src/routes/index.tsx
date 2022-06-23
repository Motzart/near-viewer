import React from 'react';
import Home from '~pages/Home';
import Tsx from '~pages/Tsx';
import Account from '~pages/Account';

export interface IRoute {
  path: string;
  component: React.ReactNode;
}

export enum RouteNames {
  HOME = '/',
  ACCOUNT = '/account',
  TSX = '/tsx',
}

export const routes: IRoute[] = [
  { path: RouteNames.HOME, component: <Home /> },
  { path: RouteNames.TSX, component: <Tsx /> },
  { path: RouteNames.ACCOUNT, component: <Account /> },
];
