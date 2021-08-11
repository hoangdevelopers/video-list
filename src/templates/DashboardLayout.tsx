import Layout from 'antd/lib/layout/layout';
import React from 'react';
import DashboardNavbar from '../components/DashboardNavbar';
import MainContainer from './MainContainer';
import Header from '../components/Header/Header';

const DashboardLayoutRoot: React.FC<{}> = (props) => (
  <Layout className="layout">{props.children}</Layout>
);
const DashboardLayoutContent: React.FC<{}> = (props) => (
  <Layout>{props.children}</Layout>
);

const DashboardLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <DashboardLayoutRoot>
      <Header />

      <MainContainer>
        <DashboardLayoutContent>{children}</DashboardLayoutContent>
      </MainContainer>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
