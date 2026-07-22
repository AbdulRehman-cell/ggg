import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Browse = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/users');
        setUsers(data || []);
      } catch (err) {
        setError('Failed to sync with the network. Connection clandestine.');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">Discovery Protocol</span>
          <h1>Target <span className="gradient-text">Acquisition</span></h1>
          <p className="hero-subtitle">
            Analyze profiles currently active within your operational radius.
          </p>
        </div>

        {loading ? (
          <div className="card">
            <p>Scanning active nodes...</p>
          </div>
        ) : error ? (
          <div className="card" style={{ border: '2px solid var(--primary)' }}>
            <p>{error}</p>
          </div>
        ) : users.length === 0 ? (
          <div className="card">
            <p>No active profiles detected in this sector.</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {users.map((user) => (
              <div key={user._id} className="card">
                <div className="feature-icon" style={{ fontSize: '2rem' }}>
                  {user.username?.charAt(0).toUpperCase() || '?'}
                </div>
                <h3>{user.username || 'Anonymous'}</h3>
                <p className="stat-label">AGE: {user.age || 'N/A'}</p>
                <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                  {user.bio?.slice(0, 80) || 'No bio provided for this asset.'}...
                </p>
                <Link to={`/profile/${user._id}`} className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                  ACCESS PROFILE
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="card">
            <h2>System Integrity</h2>
            <p className="muted">
              All interactions are end-to-end verified. Ensure your behavior adheres 
              to the established platform manifestos. Disruptive nodes will be 
              quarantined via the admin layer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Browse;