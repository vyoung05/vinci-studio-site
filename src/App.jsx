import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Buy from './pages/Buy';
import Download from './pages/Download';
import Admin from './pages/Admin';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/download" element={<Download />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
