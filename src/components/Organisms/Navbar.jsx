import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = styled.nav`
  background: #5e7fe1;
  color: #fff;
  padding: 0.8rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    background: #444;
    padding: 1rem 0;
  }
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const SearchBox = styled.input`
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>MyApp</Logo>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </MenuIcon>
      <Menu open={menuOpen}>
        <SearchBox type="text" placeholder="Search..." />
        {/* <MenuItem href="#">Home</MenuItem>
        <MenuItem href="#">About</MenuItem>
        <MenuItem href="#">Services</MenuItem>
        <MenuItem href="#">Contact</MenuItem> */}
      </Menu>
    </Nav>
  );
}