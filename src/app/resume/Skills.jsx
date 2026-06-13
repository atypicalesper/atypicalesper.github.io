import AnimatedList from '../../components/AnimatedList'

const skills = [
  { label: 'backend', items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'Python', 'FastAPI', 'Flask'] },
  { label: 'ai / genai', items: ['RAG', 'OpenAI', 'Embeddings', 'Pinecone', 'LangChain', 'LangSmith', 'Ollama'] },
  { label: 'databases', items: ['PostgreSQL', 'PostGIS', 'MySQL', 'MongoDB', 'Redis', 'BigQuery'] },
  { label: 'frontend', items: ['Next.js', 'React', 'React Query', 'Zustand', 'Redux Toolkit', 'Tailwind'] },
  { label: 'cloud / devops', items: ['AWS', 'GCP', 'Docker', 'Terraform', 'CI/CD', 'RabbitMQ', 'MQTT'] },
  { label: 'auth / testing', items: ['JWT', 'OAuth2', 'RBAC', 'Jest', 'pytest', 'Playwright'] },
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