import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Collaborations from './pages/Collaborations';
import ContactPage from './pages/ContactPage';
import Error from './pages/Error';
import Home from './pages/Home';
import About from './pages/About';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/legal/online-terms-and-conditions"
          element={<TermsAndConditions />}
        />
        <Route path="/collaborations" element={<Collaborations />} />

        <Route path="*" element={<Error errorCode={404} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
