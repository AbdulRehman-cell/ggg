import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <span className="eyebrow">THE CLANDESTINE CONNECTION</span>
          <h1>
            FORGE <span className="gradient-text">RADICAL</span><br />
            CONNECTIONS.
          </h1>
          <p className="hero-subtitle">
            Beyond algorithms. A tactile, brutalist approach to modern human 
            interaction. Zero fluff, pure intent.
          </p>
          <div className="hero-actions">
            <Link to="/browse" className="btn btn-primary">Enter Network</Link>
            <a href="#how" className="btn btn-secondary">Learn Protocols</a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>THE ARCHITECTURE</h2>
          <p>Engineered for those who value authenticity over digital performativity.</p>
        </div>
        <div className="grid grid-3">
          <div className="card">
            <div className="feature-icon">01</div>
            <h3>ENCRYPTED INTENT</h3>
            <p>Our matching algorithm doesn't track likes—it parses intent signatures for deeper compatibility.</p>
          </div>
          <div className="card">
            <div className="feature-icon">02</div>
            <h3>BRUTAL HONESTY</h3>
            <p>Profiles stripped of vanity metrics. Just you, your thoughts, and your aesthetic values.</p>
          </div>
          <div className="card">
            <div className="feature-icon">03</div>
            <h3>ISOLATED NODES</h3>
            <p>Conversations exist in secure, ephemeral clusters. No permanence unless you explicitly lock it.</p>
          </div>
        </div>
      </section>

      <section className="section bg-surface" id="how">
        <div className="container">
          <div className="section-head">
            <h2>OPERATIONAL FLOW</h2>
          </div>
          <div className="grid grid-4">
            <div className="step">
              <div className="step-num">01</div>
              <h4>SIGNAL</h4>
              <p>Broadcast your presence into the network.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>SYNC</h4>
              <p>Filter connections through our logic engine.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>SECURE</h4>
              <p>Enter a private dialogue channel.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>FORGE</h4>
              <p>Manifest the connection in physical space.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="stats">
          <div className="stat-card">
            <div className="stat-value">12.4K</div>
            <div className="stat-label">ACTIVE NODES</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">98%</div>
            <div className="stat-label">COMPATIBILITY SYNC</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">4.2K</div>
            <div className="stat-label">REAL-WORLD FORGED</div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="testimonial-card">
          <p className="testimonial-quote">
            "Most platforms feel like a bazaar. This feels like a summit. It forced me to actually think about what I wanted to convey."
          </p>
          <div className="testimonial-author">— K. VANCE, ARCHITECT</div>
        </div>
      </section>

      <section className="section container">
        <div className="card" style={{ textAlign: 'center', padding: '4rem' }}>
          <h2>READY TO SYNC?</h2>
          <p style={{ marginBottom: '2rem' }}>Access is restricted to those ready to be transparent.</p>
          <Link to="/browse" className="btn btn-primary">INITIATE HANDSHAKE</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;