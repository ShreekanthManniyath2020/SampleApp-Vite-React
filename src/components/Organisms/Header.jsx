import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.navBg};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ToggleWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
`;

const ToggleCheckbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #4caf50;
  }
  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;


const Header = ({ isDark, toggleTheme }) => {
  return (
    <Nav>
      <NavTitle>My App</NavTitle>
      <ToggleWrapper>
        <ToggleCheckbox type="checkbox" checked={isDark} onChange={toggleTheme} />
        <ToggleSlider />
      </ToggleWrapper>
    </Nav>
  )
}

export default Header



