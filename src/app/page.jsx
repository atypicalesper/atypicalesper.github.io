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
        <p>
          Hi! This is <b>Tarun</b> (he/him).
          <br />
          Your friendly neighbourhood <strong>programmer</strong>.
          <br />
          <strong>Backend</strong> wizard, adept at creative problem-solving,
          <br /> conquering challenges with logic and innovation.
        </p>

        <p>
          I currently work as a <strong>Software Developer</strong> in <strong>Gurugram, India</strong>.<br />
          My passion burns the brightest for Backend Engineering.<br />
          I am fervently tuned to songs, soaking up their vibes.
        </p>

        <strong>
          <a href="mailto:atypicalesper@gmail.com" className="about-link">email&mdash;</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/atypicalesper/" className="about-link">linkedin&mdash;</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/atypicalesper" className="about-link">github&mdash;</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/atypicalesper" className="about-link">instagram&mdash;</a>
          <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/0c7fr56muocq15feajc03kgh3" className="about-link">spotify&mdash;</a>
        </strong>
      </section>
    </>
  );
};

export default Home;
