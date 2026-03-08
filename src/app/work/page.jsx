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
          title="Drumkit"
          description="A time-killer drum machine — map keyboard keys to drum sounds and make cool drumrolls for trolls and thug-life moments."
          link="/drumkit"
          tags={['JavaScript', 'HTML', 'CSS', 'jQuery']}
        />

        <Card
          title="Finance Tracker"
          description="A personal finance REST API with JWT auth, RBAC, Redis caching, rate limiting, and Swagger docs. Backed by PostgreSQL."
          link="https://github.com/atypicalesper/finance-tracker"
          tags={['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Swagger']}
        />

        <Card
          title="GameZone"
          description="Real-time multiplayer gaming platform with Rock Paper Scissors, Tic Tac Toe, and Trivia Quiz. Live chat, global leaderboards, and JWT auth in an Nx monorepo."
          link="https://github.com/atypicalesper/games-games"
          tags={['NestJS', 'Next.js', 'Socket.io', 'Prisma', 'TypeScript', 'Nx', 'Tailwind']}
        />
      </div>
    </section>
  );
};

export default Work;
