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
    desc: 'A technology-driven NBFC platform for instant digital loans and end-to-end credit lifecycle management — seamless onboarding, real-time KYC, automated approvals, disbursement, and repayment tracking.',
    points: [
      'Migrated legacy PHP monolith to a NestJS-based microservices architecture, improving scalability, maintainability, and deployment efficiency by ~40%.',
      'Built KYC and risk assessment services integrating Aadhaar eKYC, PAN verification, Account Aggregator, and bank statement analysis for instant, compliant loan decisioning.',
      'Designed and implemented a secure User Management Service (UMS) with RBAC, custom authentication/authorization, session management, and audit logging.',
      'Deployed and scaled services on AWS using Docker, leveraging Redis for caching and performance optimization in high-traffic financial workflows.',
    ],
  },
  {
    title: "That's My Jam",
    domain: 'entertainment',
    tags: ['Node.js', 'WebSocket', 'Stripe', 'NodeCron'],
    desc: 'A real-time music engagement platform where audiences bid on songs for DJs or bands at live events — live interactions, dynamic slot scheduling, secure payments, and competitive battle modes.',
    points: [
      'Built a real-time event-driven bidding platform using WebSockets, enabling live song requests, slot scheduling, and competitive battle modes for DJs and bands.',
      'Designed modular APIs with role-based access control and activity tracking for patrons and performers (MDBs).',
      'Implemented analytics and monitoring hooks to track bidding trends, top-requested songs, and per-event revenue insights.',
      'Integrated and optimized Stripe payment workflows, improving transaction reliability and contributing to a 20% increase in client revenue.',
    ],
  },
  {
    title: 'First Fire',
    domain: 'IoT',
    tags: ['Node.js', 'MQTT', 'EMQX', 'PostgreSQL', 'AWS SNS', 'Twilio'],
    desc: 'An IoT-driven safety and incident management platform that detects fire hazards in garbage trucks across the United States, processing real-time sensor data and triggering multi-channel alerts.',
    points: [
      'Built a real-time IoT alerting system using MQTT and EMQX to process sensor data from garbage trucks and detect fire incidents.',
      'Implemented automated multi-channel notifications via Twilio (SMS/Calls) and AWS SNS for instant incident response.',
      'Designed backend services for event processing, alert orchestration, and incident logging using Node.js and PostgreSQL.',
      'Deployed and monitored services on AWS, ensuring high availability and low-latency alert delivery.',
    ],
  },
  {
    title: 'Direct Care Staffing',
    domain: 'healthcare',
    tags: ['Node.js', 'PostgreSQL', 'Sequelize', 'PostGIS'],
    desc: 'A healthcare staffing platform streamlining nurse onboarding, credential management, certification tracking, and workforce deployment with HIPAA-compliant data handling.',
    points: [
      'Designed and optimized data models and schemas to manage complex healthcare records, credentials, and certifications.',
      'Implemented secure API layers with encryption and access controls to ensure HIPAA-compliant handling of sensitive data.',
      'Leveraged PostGIS for location-aware workforce deployment and staffing analytics.',
      'Built scalable backend services using Node.js, Sequelize, and PostgreSQL to support high-volume staffing operations.',
    ],
  },
  {
    title: 'Dave Steel Company',
    domain: 'construction',
    tags: ['Node.js', 'PostgreSQL', 'Sequelize', 'AWS EC2', 'Nginx'],
    desc: 'A custom HRMS for a construction company managing payroll, workforce operations, and integrations with third-party structural design tools — supporting project-based staffing and approval workflows.',
    points: [
      'Modernized and optimized a construction-focused HRMS, improving scalability, performance, and third-party tool integrations.',
      'Refactored legacy modules and optimized database queries and indexing, achieving a 40% performance improvement.',
      'Integrated Tekla Structures with HRMS workflows to synchronize project assignments and approval pipelines.',
      'Deployed and maintained the application on AWS EC2, configuring Nginx for scalable and reliable production environments.',
    ],
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

      <div className="section client-work-section">
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
                <ul className="desc-list">
                  {p.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
};

export default Work;
