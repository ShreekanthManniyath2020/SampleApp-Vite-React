import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.main`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
`;

const MainContent = () => {
  return (
     <ContentContainer>
      <h2>Welcome to the Dashboard</h2>
      <p>This is the main content area.</p>
    </ContentContainer>
  )
}

export default MainContent