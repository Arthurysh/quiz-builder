import React from 'react';
import Header from '../Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header currentPage={'quizzes'} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
