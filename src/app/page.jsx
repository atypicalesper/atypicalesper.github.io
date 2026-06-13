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
    'https://music.apple.com/profile/atypicalesper',
  ],
};

const stats = [
  { value: '3+ yrs', label: 'production backend engineering' },
  { value: '5 domains', label: 'fintech · healthcare · iot · biotech · real-time' },
  { value: '~40%', label: 'scalability gained in legacy modernization' },
  { value: 'node · nestjs', label: 'plus aws, postgres, redis, microservices' },
];

const featuredWork = [
  {
    title: 'Loan Management System',
    label: 'fintech systems',
    summary: 'Migrated a legacy loan platform into scalable NestJS microservices and built KYC-heavy verification flows for faster, compliant decisioning.',
    impact: '~40% improvement in scalability, maintainability, and deployment efficiency.',
    href: '/work/',
  },
  {
    title: "That's My Jam",
    label: 'real-time product',
    summary: 'Built live bidding, slot scheduling, and payments infrastructure for music events with real-time WebSocket interactions.',
    impact: 'Improved Stripe transaction reliability and contributed to a 20% revenue increase.',
    href: '/work/',
  },
  {
    title: 'First Fire',
    label: 'iot alerting',
    summary: 'Designed a real-time ingestion and alert pipeline for detecting fire incidents from truck sensor streams.',
    impact: 'Enabled low-latency incident routing through MQTT, Twilio, and AWS SNS.',
    href: '/work/',
  },
];

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
      <section className="about home-editorial">
        <header className="lede">
          <p className="lede-kicker">software developer — backend systems — gurugram, india</p>

          <h1 className="display-name" aria-label="Tarun Singh">
            <span className="display-name-line">Tarun</span>
            <span className="display-name-line display-name-line--outline">Singh</span>
          </h1>

          <p className="lede-statement">
            Hi, I&apos;m Tarun — I build backend systems that stay <em>calm</em> under real-world complexity.
          </p>

          <p className="lede-copy">
            A developer based in Gurugram, India. Most of my energy goes into <strong>Node.js</strong>,{' '}
            <strong>NestJS</strong>, microservices, and cloud workflows — reliable APIs and the kind of
            foundations teams can keep building on. Off the clock, usually chasing good music and side
            projects with personality.
          </p>

          <div className="hero-actions" aria-label="Primary actions">
            <a href="/work/" className="hero-action hero-action--primary">view work</a>
            <a href="/resume/" className="hero-action">experience</a>
            <a href="mailto:atypicalesper@gmail.com" className="hero-action">contact</a>
          </div>

          <div className="lede-meta">
            <div className="about-links" aria-label="Contact and social links">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/atypicalesper/" className="about-link">linkedin</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/atypicalesper" className="about-link">github</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/atypicalesper" className="about-link">instagram</a>
              <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/0c7fr56muocq15feajc03kgh3" className="about-link">spotify</a>
              <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/profile/atypicalesper" className="about-link">apple music</a>
            </div>

            <div className="coding-profiles" aria-label="Coding profiles">
              <span className="coding-profiles-label">coding profiles</span>
              <div className="coding-profiles-links">
                <a target="_blank" rel="noopener noreferrer" href="https://www.naukri.com/code360/profile/atypicalesper" className="about-link">coding ninjas</a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.leetcode.com/atypicalesper/" className="about-link">leetcode</a>
              </div>
            </div>
          </div>
        </header>

        <div className="quiet-stats" aria-label="At a glance">
          {stats.map((stat) => (
            <div key={stat.value} className="quiet-stat">
              <span className="quiet-stat-value">{stat.value}</span>
              <span className="quiet-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="home-featured section">
          <h2>selected work</h2>
          <ol className="featured-index">
            {featuredWork.map((item, i) => (
              <li key={item.title}>
                <a className="featured-row" href={item.href}>
                  <span className="featured-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="featured-row-body">
                    <span className="featured-row-label">{item.label}</span>
                    <span className="featured-row-title">{item.title}</span>
                    <span className="featured-row-summary">{item.summary}</span>
                    <span className="featured-row-impact">{item.impact}</span>
                  </span>
                  <span className="featured-row-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ol>
          <a href="/work/" className="featured-all">all projects ↗</a>
        </div>
      </section>
    </>
  );
};

export default Home;
