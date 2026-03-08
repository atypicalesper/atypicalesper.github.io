const skills = [
  { label: 'backend',   items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'Python', 'Django'] },
  { label: 'databases', items: ['PostgreSQL', 'MongoDB', 'Supabase', 'Pinecone', 'MySQL', 'Redis'] },
  { label: 'devops',    items: ['Docker', 'AWS', 'GCP', 'RabbitMQ', 'MQTT', 'PM2', 'Nginx'] },
  { label: 'auth/test', items: ['JWT', 'OAuth2', 'Bcrypt', 'Jest', 'Selenium', 'Mocha'] },
];

const projects = [
  {
    title: 'Loan Management System',
    stack: 'NestJS · MySQL · Redis · AWS · Docker',
    desc: 'Fintech NBFC platform — migrated PHP monolith to microservices (+40% efficiency), built KYC/risk assessment, UMS with RBAC, and high-traffic financial APIs.',
  },
  {
    title: "That's My Jam",
    stack: 'Node.js · WebSocket · Stripe · NodeCron',
    desc: 'Real-time music bidding platform for live events. WebSocket-driven song requests, competitive battle modes, Stripe payments — contributed to 20% revenue increase.',
  },
  {
    title: 'First Fire',
    stack: 'Node.js · MQTT · EMQX · PostgreSQL · AWS · Twilio',
    desc: 'IoT fire detection system for US garbage trucks. Real-time sensor processing via MQTT/EMQX, multi-channel alerts through Twilio and AWS SNS.',
  },
  {
    title: 'Direct Care Staffing',
    stack: 'Node.js · PostgreSQL · Sequelize · PostGIS',
    desc: 'HIPAA-compliant healthcare staffing platform — credential management, PostGIS location-based workforce deployment, encrypted API layers.',
  },
  {
    title: 'Dave Steel Company',
    stack: 'Node.js · PostgreSQL · Sequelize · AWS EC2 · Nginx',
    desc: 'Construction HRMS — payroll, project-based staffing, Tekla Structures integration, Nginx/EC2 deployment. Achieved 40% performance gain via query optimisation.',
  },
];

const certs = [
  { name: 'The Joy of Computing Using Python', issuer: 'NPTEL · IIT Madras' },
  { name: 'Certificate of Excellence — Data Structures in C++', issuer: 'Coding Ninjas' },
];

const Resume = () => {
  return (
    <section>

      <div className="section">
        <h2 className="small-margin">experience</h2>
        <div className="resume-company">
          <span className="resume-role">Senior Fullstack Engineer</span>
          <span className="resume-meta">Crownstack Technologies &middot; 2026–present &middot; Noida, UP</span>
        </div>

        {projects.map((p) => (
          <div className="subsection" key={p.title}>
            <p className="title">{p.title}</p>
            <p className="date">{p.stack}</p>
            <p className="desc">{p.desc}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h2>skills</h2>
        <div className="resume-skills">
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
        </div>
      </div>

      <div className="section">
        <h2>certifications</h2>
        {certs.map((c) => (
          <div className="subsection" key={c.name}>
            <p className="title">{c.name}</p>
            <p className="date">{c.issuer}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Resume;
