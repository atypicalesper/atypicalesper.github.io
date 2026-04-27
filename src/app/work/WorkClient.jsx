'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import AnimatedGrid from '../../components/AnimatedGrid';
import AnimatedList from '../../components/AnimatedList';

const professionalProjects = [
  {
    title: 'Loan Management System',
    domain: 'fintech',
    result: 'Legacy PHP platform migrated into NestJS microservices with roughly 40% better scalability and deployment efficiency.',
    scope: 'Architecture migration, KYC orchestration, secure user management, cloud deployment, performance optimization.',
    tags: ['NestJS', 'MySQL', 'TypeORM', 'Redis', 'AWS', 'Docker', 'Microservices'],
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
    result: 'Real-time bidding and payments workflow that helped improve transaction reliability and contributed to a 20% revenue increase.',
    scope: 'Live event mechanics, websockets, role-aware APIs, analytics, Stripe payment flows.',
    tags: ['Node.js', 'WebSocket', 'Stripe', 'NodeCron'],
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
    result: 'Low-latency alerting pipeline for fire incidents detected from live truck sensor data.',
    scope: 'MQTT/EMQX ingestion, event processing, alert orchestration, multi-channel notifications, AWS deployment.',
    tags: ['Node.js', 'MQTT', 'EMQX', 'PostgreSQL', 'AWS SNS', 'Twilio'],
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
    result: 'Secure backend systems for sensitive staffing workflows with strong data modeling and compliance-minded API design.',
    scope: 'Healthcare data modeling, encrypted API layers, credential management, PostGIS-based location analytics.',
    tags: ['Node.js', 'PostgreSQL', 'Sequelize', 'PostGIS'],
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
    result: 'Modernized HRMS with faster query performance and better integration into operational workflows.',
    scope: 'Legacy refactors, performance tuning, schema/query optimization, infrastructure setup, third-party integration.',
    tags: ['Node.js', 'PostgreSQL', 'Sequelize', 'AWS EC2', 'Nginx'],
    points: [
      'Modernized and optimized a construction-focused HRMS, improving scalability, performance, and third-party tool integrations.',
      'Refactored legacy modules and optimized database queries and indexing, achieving a 40% performance improvement.',
      'Integrated Tekla Structures with HRMS workflows to synchronize project assignments and approval pipelines.',
      'Deployed and maintained the application on AWS EC2, configuring Nginx for scalable and reliable production environments.',
    ],
  },
  {
    title: 'Biotech Imaging Platform',
    domain: 'biotech',
    result: 'Research-facing data platform with faster frontend builds and scalable cloud-backed biological data processing.',
    scope: 'React/Vite frontend, Flask APIs, biological data visualization, cloud services, auth and observability.',
    tags: ['React', 'TypeScript', 'Vite', 'MUI', 'Plotly.js', 'Python', 'Flask', 'GCP'],
    points: [
      'Built a React 18 + TypeScript frontend for visualizing cell sorting and imaging data, migrated from Create React App to Vite for significantly faster builds and HMR.',
      'Developed REST APIs using Python Flask, integrated with Google App Engine Flex, Cloud Endpoints, and Cloud Run for scalable cell data processing.',
      'Implemented interactive biological data visualizations using a custom Plotly.js bundle, enabling researchers to explore large-scale imaging datasets with minimal bundle overhead.',
      'Integrated Auth0 authentication and Datadog observability, enforcing secure access control and real-time performance monitoring across the platform.',
    ],
  },
];

export default function WorkClient() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className="work">
      <h1>Projects</h1>
      <p className="work-intro">
        A mix of playful builds, production-minded systems, and experiments that sharpen both engineering depth and product instincts.
      </p>
      <div className="work-links">
        <a className="work-link" href="https://www.naukri.com/code360/profile/atypicalesper">Coding Ninjas</a>
        <a className="work-link" href="https://www.leetcode.com/atypicalesper/">leetcode</a>
      </div>

      <div className="section featured-work-section">
        <h2>featured work</h2>
        <p className="section-intro">
          A quick read on the projects that best show product thinking, backend depth, and the kind of systems work I like to own.
        </p>
      </div>

      <AnimatedGrid className="grid">
        <Card
          title="Drumkit"
          eyebrow="playful build"
          summary="Keyboard-powered drum machine with instant feedback and a more fun-than-useful personality."
          description="A time-killer drum machine — map keyboard keys to drum sounds and make cool drumrolls for trolls and thug-life moments."
          link="/bonus"
          tags={['JavaScript', 'HTML', 'CSS', 'jQuery']}
          ctaLabel="try demo"
        />

        <Card
          title="Finance Tracker"
          eyebrow="backend api"
          summary="Personal finance REST API with auth, caching, rate limiting, and solid developer docs."
          description="A personal finance REST API with JWT auth, RBAC, Redis caching, rate limiting, and Swagger docs. Backed by PostgreSQL."
          link="https://github.com/atypicalesper/finance-tracker"
          tags={['Node.js', 'Express', 'PostgreSQL', 'Redis', 'JWT', 'Swagger']}
          ctaLabel="view repo"
        />

        <Card
          title="GameZone"
          eyebrow="real-time platform"
          summary="Multiplayer games, live chat, leaderboards, and JWT auth in a full-stack monorepo."
          description="Real-time multiplayer gaming platform with Rock Paper Scissors, Tic Tac Toe, and Trivia Quiz. Live chat, global leaderboards, and JWT auth in an Nx monorepo."
          link="https://github.com/atypicalesper/games-games"
          tags={['NestJS', 'Next.js', 'Socket.io', 'Prisma', 'TypeScript', 'Nx', 'Tailwind']}
          ctaLabel="view repo"
        />

        <Card
          title="dev-atlas"
          eyebrow="open source"
          summary="Deep-dive engineering knowledge base built for developers who want understanding, not just snippets."
          description="Open-source developer knowledge base — deep-dive docs on JS internals, TypeScript, system design, databases, DevOps, and more. Built for engineers who want to actually understand the stack."
          link="https://atypicalesper.github.io/dev-atlas"
          tags={['Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Markdown']}
          ctaLabel="open site"
        />

        <Card
          title="RAG Chat"
          eyebrow="ai product"
          summary="Multi-tenant RAG chat frontend with streaming responses, uploads, and tenant-isolated context."
          description="Multi-tenant RAG chatbot frontend with SSE streaming, document upload, and per-tenant context isolation. Paired with a FastAPI + LangChain + Chroma backend."
          link="https://github.com/atypicalesper/COMET-fy-q4-25-26"
          tags={['Next.js', 'React', 'TypeScript', 'Tailwind', 'SSE', 'FastAPI', 'LangChain']}
          ctaLabel="view repo"
        />
      </AnimatedGrid>

      <div className="section client-work-section">
        <h2>client work</h2>
        <p className="section-intro">
          Selected delivery across fintech, healthcare, IoT, construction, and biotech, framed around scope and outcomes instead of just stack names.
        </p>
        <AnimatedList>
          {professionalProjects.map((p, i) => (
            <div key={p.title} className={`subsection exp-item${open === i ? ' exp-open' : ''}`}>
              <button
                type="button"
                className="job-header"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
                aria-controls={`client-project-${i}`}
              >
                <span className="title">
                  {p.title}
                  <span className="client-domain-badge">{p.domain}</span>
                </span>
                <span className="date">
                  <span className="exp-meta">{p.tags.join(' · ')}</span>
                  <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
                </span>
              </button>
              <p className="client-result">{p.result}</p>
              <p className="client-scope"><strong>Scope:</strong> {p.scope}</p>
              <div id={`client-project-${i}`} className={`desc-collapse${open === i ? ' desc-collapse--open' : ''}`}>
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
}
