'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import AnimatedGrid from '../../components/AnimatedGrid';
import AnimatedList from '../../components/AnimatedList';

const professionalProjects = [
  {
    title: 'Loan Management System',
    domain: 'fintech',
    tags: ['NestJS', 'MySQL', 'TypeORM', 'Redis', 'AWS', 'Docker', 'Microservices'],
    desc: 'Migrated PHP monolith to NestJS microservices (+40% scalability). UMS with RBAC, session control, and audit logs for high-trust financial ops.',
  },
  {
    title: 'KYC & Verification APIs',
    domain: 'fintech',
    tags: ['Aadhaar eKYC', 'PAN', 'eNACH', 'CIBIL', 'Account Aggregator', 'SSE'],
    desc: 'Microservices for Aadhaar eKYC, PAN, eNACH bank verification, CIBIL check, Account Aggregator, and bank statement analysis — instant loan decisioning.',
  },
  {
    title: "That's My Jam",
    domain: 'entertainment',
    tags: ['Node.js', 'WebSocket', 'Stripe', 'NodeCron'],
    desc: 'Real-time song-bidding for live events — Stripe integration drove 20% revenue increase; WebSocket battle modes, automated sync via cron.',
  },
  {
    title: 'First Fire',
    domain: 'IoT',
    tags: ['Node.js', 'MQTT', 'EMQX', 'PostgreSQL', 'AWS SNS', 'Twilio'],
    desc: 'IoT fire detection for US garbage trucks — MQTT pub/sub for real-time sensor alerts, multi-channel notifications via Twilio and AWS SNS.',
  },
  {
    title: 'Direct Care Staffing',
    domain: 'healthcare',
    tags: ['Node.js', 'PostgreSQL', 'PostGIS', 'AWS S3', 'HIPAA'],
    desc: 'HIPAA-compliant healthcare staffing — encrypted APIs, PostGIS location-based workforce deployment, secure video uploads via AWS S3.',
  },
  {
    title: 'RAG Chatbot POC',
    domain: 'AI',
    tags: ['Node.js', 'OpenAI', 'Pinecone', 'LLMs'],
    desc: 'Context-aware document QA framework — document ingestion pipeline, vector search via Pinecone, LLM-driven responses.',
  },
];

const Work = () => {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

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

      <AnimatedGrid className="grid">
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

        <Card
          title="dev-atlas"
          description="Open-source developer knowledge base — deep-dive docs on JS internals, TypeScript, system design, databases, DevOps, and more. Built for engineers who want to actually understand the stack."
          link="https://atypicalesper.github.io/dev-atlas"
          tags={['Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Markdown']}
        />

        <Card
          title="RAG Chat"
          description="Multi-tenant RAG chatbot frontend with SSE streaming, document upload, and per-tenant context isolation. Paired with a FastAPI + LangChain + Chroma backend."
          link="https://github.com/atypicalesper/COMET-fy-q4-25-26"
          tags={['Next.js', 'React', 'TypeScript', 'Tailwind', 'SSE', 'FastAPI', 'LangChain']}
        />
      </AnimatedGrid>

      <div className="section">
        <h2>client work</h2>
        <AnimatedList>
          {professionalProjects.map((p, i) => (
            <div key={p.title} className={`subsection exp-item${open === i ? ' exp-open' : ''}`}>
              <div className="job-header" onClick={() => toggle(i)}>
                <p className="title">
                  {p.title}
                  <span className="client-domain-badge">{p.domain}</span>
                </p>
                <p className="date">
                  <span className="exp-meta">{p.tags.join(' · ')}</span>
                  <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
                </p>
              </div>
              <div className={`desc-collapse${open === i ? ' desc-collapse--open' : ''}`}>
                <p className="client-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Work;
