import AnimatedText from '../components/AnimatedText';

const Home = () => {
  return (
    <section className="about">
      <AnimatedText>
        Hi! This is <b>Tarun</b> (he/him).{' '}
        Your friendly neighbourhood <strong>programmer</strong>.{' '}
        <strong>Backend</strong> wizard, adept at creative problem-solving,
        conquering challenges with logic and innovation.
      </AnimatedText>

      <strong>
        <a target="blank" href="mailto:atypicalesper@gmail.com" className="about-link">email&mdash;</a>
        <a target="blank" href="https://www.linkedin.com/in/atypicalesper/" className="about-link">linkedin&mdash;</a>
      </strong>
    </section>
  );
};

export default Home;
