import { ThemeProvider } from '@emotion/react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FAQ from './Components/Dashboard/FAQ';
import Home from './Components/Dashboard/Home';
import Reporting from "./Components/Dashboard/Reporting";
import TermsAndConditions from './Components/Dashboard/TermsAndConditions';
import StaticLayout from './Components/Layout/StaticLayout';
import { theme } from './utils/Theme';

function App({}) {
  return (
    <ThemeProvider theme={theme}>
      <Router>
          <Routes>
            <Route path="/" element={<StaticLayout />}>
              <Route index element={<Home />} />
              <Route path="FAQ" element={<FAQ />} />
              <Route path="Home" element={<Home />} />
              <Route path="Reporting" element={<Reporting />} />
              <Route path="TermsAndConditions" element={<TermsAndConditions />} />
            </Route>
        </Routes>
  
      </Router>
    </ThemeProvider>
  );
}

export default App;
