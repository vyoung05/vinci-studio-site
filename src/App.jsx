import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Studio from './pages/Studio';
import Buy from './pages/Buy';
import Download from './pages/Download';
import ComingSoon from './pages/ComingSoon';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/studio/buy" element={<Buy />} />
          <Route path="/studio/download" element={<Download />} />
          {/* Legacy routes — redirect-friendly */}
          <Route path="/buy" element={<Buy />} />
          <Route path="/download" element={<Download />} />
          {/* Product pages */}
          <Route path="/films" element={<ComingSoon product="films" />} />
          <Route path="/academy" element={<ComingSoon product="academy" />} />
          <Route path="/popvinci" element={<ComingSoon product="popvinci" />} />
          <Route path="/ddns" element={<ComingSoon product="ddns" />} />
          <Route path="/gaming" element={<ComingSoon product="gaming" />} />
          {/* Admin */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
