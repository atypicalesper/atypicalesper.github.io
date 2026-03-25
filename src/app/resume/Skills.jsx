import AnimatedList from '../../components/AnimatedList'

const skills = [
  { label: 'backend', items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'Python', 'Django'] },
  { label: 'databases', items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Pinecone'] },
  { label: 'cloud / devops', items: ['AWS', 'GCP', 'Docker', 'Nginx', 'PM2', 'RabbitMQ', 'MQTT'] },
  { label: 'auth / testing', items: ['JWT', 'OAuth2', 'Bcrypt', 'Jest', 'Mocha', 'Selenium'] },
  { label: 'architecture', items: ['Microservices', 'Event-Driven Systems', 'System Design', 'REST APIs', 'Scalable APIs'] },
]

export default function Skills() {
  return (
    <div className="section">
      <h2>skills</h2>

      <AnimatedList className="resume-skills" delay={0.15}>
        {skills.map(({ label, items }) => (
          <div className="skill-row" key={label}>
            <span className="skill-label">{label}</span>

            <span className="skill-items">
              {items.map((s) => (
                <span className="skill-tag" key={s}>
                  {s}
                </span>
              ))}
            </span>
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}