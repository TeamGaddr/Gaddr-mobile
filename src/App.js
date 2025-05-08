import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';
import Terms from './Terms';
import Contact from './Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
