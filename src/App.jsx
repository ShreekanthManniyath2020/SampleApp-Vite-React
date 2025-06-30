import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import GlobalStyle from './theme/GlobalStyles';
import NavbarComponent from './components/Organisms/Navbar';
import Sidebar from './components/Organisms/Sidebar';
import { Home } from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import styled from 'styled-components';
import Products from './pages/Products';

const Layout = styled.div`
  display: flex;
`;

const Main = styled.main`
  flex-grow: 1;
  padding: 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const App = () => {

   const [darkMode, setDarkMode] = useState(false);

  return (        
<>    
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <GlobalStyle />
        <NavbarComponent toggleTheme={() => setDarkMode(!darkMode)} />
        <Layout>
          <Sidebar />
          <Main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Main>
        </Layout>
      </Router>
    </ThemeProvider>
   </>     
  );
}

export default App