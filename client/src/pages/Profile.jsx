import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/users/${id}`);
        setUser(data);
      } catch (err) {
        setError('USER DATA UNAVAILABLE. THE CONNECTION IS SEVERED.');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) return <div className="container section">LOADING TRANSMISSION...</div>;
  if (error) return <div className="container section"><h1>ERROR</h1><p>{error}</p><button className="btn btn-primary" onClick={() => navigate('/browse')}>RETURN TO BROWSE</button></div>;

  return (
    <div className="container section">
      <section className="hero">
        <div className="section-head">
          <span className="eyebrow">OPERATIVE PROFILE</span>
          <h1>{user?.username || 'UNKNOWN ENTITY'}</h1>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="grid grid-2">
            <div>
              <span className="stat-label">BIOGRAPHY</span>
              <p style={{ marginTop: '1rem' }}>{user?.bio || 'NO BIOGRAPHICAL DATA RECORDED.'}</p>
            </div>
            <div>
              <div className="grid grid-2">
                <div className="stats">
                  <span className="stat-value">{user?.age ?? 'N/A'}</span>
                  <span className="stat-label">YEARS ACTIVE</span>
                </div>
                <div className="stats">
                  <span className="stat-value">{user?.interests?.split(',').length || 0}</span>
                  <span className="stat-label">INTEREST NODES</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            <span className="stat-label">INTERESTS</span>
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem', flexWrap: 'wrap' }}>
              {user?.interests?.split(',').map((tag, i) => (
                <span key={i} className="pill">{tag.trim().toUpperCase()}</span>
              )) || <span className="pill">NULL</span>}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <button className="btn btn-primary" onClick={() => alert('MATCH REQUEST ENCRYPTED AND SENT.')}>
          INITIATE CONTACT
        </button>
      </section>
    </div>
  );
};

export default Profile;