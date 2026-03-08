import AnimatedList from '../../components/AnimatedList';

const skills = [
  { label: 'backend',   items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'Python', 'Django'] },
  { label: 'databases', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Pinecone', 'MySQL', 'Redis'] },
  { label: 'devops',    items: ['Docker', 'AWS', 'GCP', 'RabbitMQ', 'MQTT', 'PM2', 'Nginx'] },
  { label: 'auth/test', items: ['JWT', 'OAuth2', 'Bcrypt', 'Jest', 'Selenium', 'Mocha'] },
];

const experience = [
  {
    role: 'Senior Fullstack Engineer',
    company: 'Crownstack Technologies',
    period: 'Jan 2026 – present',
    location: 'Noida, UP',
    summary: 'Product company — fullstack engineering across client-facing features and internal systems.',
  },
  {
    role: 'Software Engineer',
    company: 'Kasar Credit and Capital Finance Pvt. Ltd.',
    period: 'Jul 2025 – Dec 2025',
    location: 'Delhi',
    summary: 'NBFC fintech — microservice architecture, KYC/verification APIs, loan decisioning, and compliance infrastructure.',
  },
  {
    role: 'Software Developer',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Dec 2022 – May 2025',
    location: 'Gurugram, HR',
    summary: 'Client-work agency — IoT, healthcare, fintech, and AI projects for US and Indian markets. Led code reviews and mentored juniors.',
  },
  {
    role: 'Software Development Intern',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Sept 2022 – Dec 2022',
    location: 'Gurugram, HR',
    summary: 'Built RESTful APIs with Swagger/Postman docs. Contributed to code reviews, standups, and sprint planning.',
  },
];

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'J C Bose University of Science & Technology, YMCA',
    period: 'Aug 2018 – Aug 2022',
    note: 'CGPA: 8.268 / 10.00',
  },
];

const Resume = () => {
  return (
    <section>

      <div className="section">
        <h2 className="small-margin">experience</h2>
        <AnimatedList>
          {experience.map((job) => (
            <div className="subsection" key={job.role + job.company}>
              <p className="title">{job.company}</p>
              <p className="date">{job.role} &middot; {job.period} &middot; {job.location}</p>
              <p className="desc">{job.summary}</p>
            </div>
          ))}
        </AnimatedList>
      </div>

      <div className="section">
        <h2>skills</h2>
        <AnimatedList className="resume-skills" delay={0.15}>
          {skills.map(({ label, items }) => (
            <div className="skill-row" key={label}>
              <span className="skill-label">{label}</span>
              <span className="skill-items">
                {items.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </span>
            </div>
          ))}
        </AnimatedList>
      </div>

      <div className="section">
        <h2>education</h2>
        <AnimatedList delay={0.1}>
          {education.map((e) => (
            <div className="resume-company" key={e.institution}>
              <span className="resume-role">{e.degree}</span>
              <span className="resume-meta">{e.institution} &middot; {e.period}</span>
              <span className="resume-meta">{e.note}</span>
            </div>
          ))}
        </AnimatedList>
      </div>

    </section>
  );
};

export default Resume;
