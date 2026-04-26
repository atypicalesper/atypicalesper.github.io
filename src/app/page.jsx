const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tarun Singh',
  url: 'https://atypicalesper.github.io',
  jobTitle: 'Software Developer',
  sameAs: [
    'https://www.linkedin.com/in/atypicalesper/',
    'https://github.com/atypicalesper',
    'https://www.instagram.com/atypicalesper',
    'https://open.spotify.com/user/0c7fr56muocq15feajc03kgh3',
  ],
};

export const metadata = {
  title: { absolute: 'Tarun Singh' },
  description:
    'Tarun Singh is a Software Developer based in Gurugram, India. Backend engineer specialising in NestJS, Node.js, microservices, and cloud architecture.',
  alternates: { canonical: '/' },
  openGraph: { url: 'https://atypicalesper.github.io' },
};

const Home = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="about">
        <div className="hero-shell">
          <div className="hero-main">
            <div className="hero-kicker">software developer • backend systems • creative problem solver</div>

            <h1 className="hero-title">
              Tarun builds backend systems that stay calm under real-world complexity.
            </h1>

            <p className="hero-copy">
              Hi, I&apos;m <strong>Tarun Singh</strong> (he/him), a developer based in <strong>Gurugram, India</strong>.
              I enjoy designing reliable APIs, scalable services, and the kind of engineering foundations teams can keep building on.
            </p>

            <p className="hero-copy hero-copy--muted">
              Most of my energy goes into <strong>Node.js</strong>, <strong>NestJS</strong>, microservices, cloud workflows, and product-minded backend engineering.
              Outside work, I&apos;m usually chasing good music and side projects with personality.
            </p>

            <div className="hero-highlights" aria-label="Highlights">
              <span className="hero-pill">backend engineering</span>
              <span className="hero-pill">microservices</span>
              <span className="hero-pill">aws + cloud infra</span>
              <span className="hero-pill">node.js / nestjs</span>
            </div>

            <div className="hero-actions" aria-label="Primary actions">
              <a href="/work/" className="hero-action hero-action--primary">view work</a>
              <a href="/resume/" className="hero-action">see experience</a>
              <a href="mailto:atypicalesper@gmail.com" className="hero-action">contact</a>
            </div>

            <div className="about-links" aria-label="Contact and social links">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/atypicalesper/" className="about-link">linkedin</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/atypicalesper" className="about-link">github</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/atypicalesper" className="about-link">instagram</a>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/0c7fr56muocq15feajc03kgh3" className="about-link">spotify</a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Quick recruiter summary">
            <div className="hero-panel-label">quick read</div>
            <h2 className="hero-panel-title">For recruiters and hiring teams</h2>
            <p className="hero-panel-copy">
              Backend-focused engineer with production experience across fintech, healthcare, IoT, biotech, and real-time consumer products.
            </p>

            <div className="hero-metrics">
              <div className="hero-metric">
                <span className="hero-metric-value">40%</span>
                <span className="hero-metric-label">improvement delivered in legacy modernization and performance work</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value">5 domains</span>
                <span className="hero-metric-label">fintech, healthcare, IoT, entertainment, biotech</span>
              </div>
              <div className="hero-metric">
                <span className="hero-metric-value">Node.js + NestJS</span>
                <span className="hero-metric-label">plus microservices, AWS, PostgreSQL, Redis, and integrations</span>
              </div>
            </div>

            <div className="hero-proof-list" aria-label="Selected proof points">
              <span className="hero-proof">microservices migration</span>
              <span className="hero-proof">secure KYC workflows</span>
              <span className="hero-proof">real-time systems</span>
              <span className="hero-proof">cloud deployments</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Home;
