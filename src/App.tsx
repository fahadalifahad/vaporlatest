import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import AboutPage from './pages/about';
import SupportPage from './pages/supportpage';
import CommunityPage from './pages/communitypage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/support-page" element={<SupportPage />} />
      <Route path="/community-page" element={<CommunityPage />} />
    </Routes>
  );
}

export default App;
