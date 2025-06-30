import React from 'react';
import styled from 'styled-components';

const SideNav = styled.aside`
  width: 220px;
  background: #f4f4f4;
  padding: 1rem;
  height: calc(100vh - 60px); /* minus header */
  position: fixed;
  top: 60px;
  left: 0;
  overflow-y: auto;
`;

const MenuItem = styled.div`
  padding: 0.8rem 0;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #ddd;
    padding-left: 10px;
    transition: 0.2s;
  }
`;

// const Sidebar = () => (
//   <SideNav>
//     <MenuItem>🏠 Dashboard</MenuItem>
//     <MenuItem>📦 Products</MenuItem>
//     <MenuItem>📊 Reports</MenuItem>
//     <MenuItem>⚙️ Settings</MenuItem>
//   </SideNav>
// );

import React from 'react';

const Sidebar = () => {
  return (
    <div>
      Side Bar
    </div>
  );
}

export default Sidebar;


