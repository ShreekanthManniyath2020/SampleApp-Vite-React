import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
`;

const Content = styled.main`
  margin-left: 220px;
  margin-top: 60px;
  padding: 2rem;
  width: 100%;
`;

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      <Sidebar />
      <Content>{children}</Content>
    </Container>
  </>
);

export default Layout;