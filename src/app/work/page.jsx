import Card from '../../components/Card';

const Work = () => {
  return (
    <section className="work">
      <h1>
        <b>Projects</b>
      </h1>
      <p>
        <strong>
          <a className="work-link" href="https://www.github.com/atypicalesper">github&mdash;</a>
          <a className="work-link" href="https://www.naukri.com/code360/profile/atypicalesper">Coding Ninjas&mdash;</a>
          <a className="work-link" href="https://www.leetcode.com/atypicalesper/">leetcode&mdash;</a>
        </strong>
      </p>

      <div className="grid">
        <Card
          title="Drumkit Game"
          description="A browser-based drum kit that maps keyboard keys to drum sounds using the Web Audio API. Press keys to play beats."
          imageSrc="./assets/images/drumkit.png"
          link="https://github.com/atypicalesper/drumkit"
          tags={['JavaScript', 'HTML', 'CSS', 'Web Audio API']}
        />

        <Card
          title="REST API"
          description="A backend REST API with authentication, CRUD operations, and clean architecture patterns."
          tags={['Node.js', 'Express', 'MongoDB']}
          comingSoon
        />

        <Card
          title="CLI Tool"
          description="A command-line utility built to automate repetitive dev tasks and improve local workflow."
          tags={['Python', 'Shell']}
          comingSoon
        />

        <Card
          title="Coming Soon"
          description="Something interesting is cooking."
          tags={['TBA']}
          comingSoon
        />
      </div>
    </section>
  );
};

export default Work;
