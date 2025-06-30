import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled.aside`
  width: 200px;
  background: ${({ theme }) => theme.navBg};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100vh - 64px);
`;

const SidebarItem = styled(Link)`
  color: ${({ theme }) => theme.navText};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #ffcc00;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarItem to="/">Dashboard</SidebarItem>
      <SidebarItem to="/products">Products</SidebarItem>
      <SidebarItem to="/about">About</SidebarItem>
      <SidebarItem to="/services">Services</SidebarItem>
      <SidebarItem to="/contact">Contact</SidebarItem>
    </SidebarWrapper>
  );
};

export default Sidebar;