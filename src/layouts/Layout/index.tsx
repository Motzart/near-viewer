import React from 'react';
import Header from '../Header';

const Layout = (props: any) => {
  const { children } = props;
  return (
    <div className="layout">
      <Header />
      <div className="container-fluid mt-5">
        <div className="page">{children}</div>
      </div>
    </div>
  );
};


export default Layout;
