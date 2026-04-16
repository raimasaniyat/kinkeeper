import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FriendProvider } from './FriendContext';
import Home from './Home';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import FriendDetails from './FriendDetails';
import Timeline from './Timeline';
import Stats from './Stats';
import NotFound from './NotFound';

function App() {
  return (
    <FriendProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/friend/:id" element={<FriendDetails />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/stats" element={<Stats />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </FriendProvider>
  );
}

export default App;
