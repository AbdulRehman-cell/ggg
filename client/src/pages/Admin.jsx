import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({ totalUsers: 0, activeMatches: 0 });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [usersRes, matchesRes] = await Promise.all([
        axios.get('/api/users'),
        axios.get('/api/matchs')
      ]);
      setUsers(usersRes.data);
      setStats({
        totalUsers: usersRes.data.length,
        activeMatches: matchesRes.data.length
      });
    } catch (err) {
      setError('System restricted. Unauthorized access attempt logged.');
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm('TERMINATE USER RECORD?')) return;
    try {
      await axios.delete(`/api/users/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      alert('Termination failed.');
    }
  };

  if (loading) return <div className="container"><section className="section"><h3>INITIALIZING CONSOLE...</h3></section></div>;
  if (error) return <div className="container"><section className="section"><h2>403</h2><p>{error}</p></section></div>;

  return (
    <div className="container">
      <section className="section">
        <div className="section-head">
          <span className="eyebrow">SYSTEM DASHBOARD</span>
          <h1>ADMIN <span className="gradient-text">CONTROL</span></h1>
        </div>

        <div className="grid grid-2" style={{ marginTop: '4rem' }}>
          <div className="card">
            <span className="stat-label">TOTAL OPERATIVES</span>
            <div className="stat-value">{stats.totalUsers}</div>
          </div>
          <div className="card">
            <span className="stat-label">ACTIVE PROTOCOLS</span>
            <div className="stat-value">{stats.activeMatches}</div>
          </div>
        </div>

        <div style={{ marginTop: '4rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '2px solid var(--border)' }}>
            <thead>
              <tr style={{ background: 'var(--surface-2)', textAlign: 'left' }}>
                <th style={{ padding: '1rem' }}>ID</th>
                <th style={{ padding: '1rem' }}>USERNAME</th>
                <th style={{ padding: '1rem' }}>STATUS</th>
                <th style={{ padding: '1rem' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} style={{ borderTop: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', color: 'var(--muted)' }}>{user._id.slice(-6)}</td>
                  <td style={{ padding: '1rem' }}>{user.username}</td>
                  <td style={{ padding: '1rem' }}>
                    <span className={user.isAdmin ? 'badge' : 'tag'}>
                      {user.isAdmin ? 'ADMIN' : 'USER'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem' }}>
                    <button 
                      className="btn btn-ghost" 
                      onClick={() => deleteUser(user._id)}
                      style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}