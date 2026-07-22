import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import Admin from './pages/Admin';

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-container">
          <div className="brand">GGG</div>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/browse">Browse</NavLink>
            <NavLink to="/admin">Admin</NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <footer>
        <div className="container footer-content">
          <div className="footer-links">
            <p>&copy; {new Date().getFullYear()} GGG PLATFORM. ALL RIGHTS RESERVED.</p>
            <div className="links">
              <a href="#">MANIFESTO</a>
              <a href="#">PROTOCOLS</a>
              <a href="#">SECURITY</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;