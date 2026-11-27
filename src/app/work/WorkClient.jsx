'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import AnimatedGrid from '../../components/AnimatedGrid';
import AnimatedList from '../../components/AnimatedList';

const featuredClientWork = [
  {
    title: 'Loan Management System',
    label: 'fintech platform',
    summary: 'Moved a legacy lending platform to NestJS microservices and rebuilt its KYC, onboarding, and user-management flows.',
    impact: '~40% improvement in scalability, maintainability, and deployment efficiency.',
    details: ['Microservices migration', 'KYC + verification flows', 'AWS + Redis scaling'],
  },
  {
    title: "That's My Jam",
    label: 'real-time product',
    summary: 'Built live bidding, scheduling, and payment flows for music events where every update had to arrive in real time.',
    impact: 'Improved transaction reliability and contributed to a 20% revenue increase.',
    details: ['WebSockets', 'Stripe flows', 'Role-aware APIs'],
  },
  {
    title: 'First Fire',
    label: 'iot alerting',
    summary: 'Turned live truck sensor data into fire alerts delivered through SMS, calls, and AWS SNS.',
    impact: 'Enabled low-latency fire detection and multi-channel operational alerting.',
    details: ['MQTT ingestion', 'Twilio + AWS SNS', 'Background job automation'],
  },
];

const aiProjects = [
  {
    title: 'Prompt Lab',
    eyebrow: 'llm tooling',
    summary: 'A local dashboard for comparing Ollama models, testing prompts, and seeing where the tokens and time go.',
    description: 'Prompt Lab runs entirely on-device with Ollama. It streams responses, compares models side by side, supports A/B prompt tests, and tracks tokens, cost estimates, hardware use, saved prompts, and request history.',
    link: 'https://github.com/atypicalesper/prompt-lab',
    tags: ['NestJS', 'Next.js 15', 'Ollama', 'SQLite', 'SSE', 'React'],
    ctaLabel: 'view repo',
  },
  {
    title: 'GenLea',
    eyebrow: 'agentic pipeline',
    summary: 'A B2B lead pipeline that finds companies, enriches them, and scores them against a defined customer profile.',
    description: 'GenLea finds companies for software-services outreach, checks hiring and contact signals, estimates Indian-origin team presence, and exports the leads that match its ICP. It uses queue-based workers, a Fastify API, and a small Python service in a microservices monorepo.',
    link: 'https://github.com/atypicalesper/genlea',
    tags: ['Node.js', 'BullMQ', 'MongoDB', 'Redis', 'Fastify', 'Python'],
    ctaLabel: 'view repo',
  },
  {
    title: 'VectorLens',
    eyebrow: 'learning lab',
    summary: 'A browser-only lab for seeing how embeddings, indexing choices, and retrieval settings affect search results.',
    description: 'VectorLens is a small semantic-search playground for experimenting with similarity metrics, chunking, ANN strategies, metadata filters, hybrid retrieval, and evaluation. It runs locally without API keys or external services.',
    link: 'https://github.com/atypicalesper/vector-lens',
    tags: ['JavaScript', 'Semantic Search', 'Embeddings', 'ANN', 'Browser'],
    ctaLabel: 'view repo',
  },
  {
    title: 'RAG',
    eyebrow: 'retrieval system',
    summary: 'A working RAG knowledge base with document ingestion, chunking, vector search, evaluation, and streaming queries.',
    description: 'This project covers the full RAG path from document ingestion and chunking to vector search, evaluation, and source-backed answers. It includes Python services, FastAPI endpoints, streaming query support, and a React + Vite frontend.',
    link: 'https://github.com/atypicalesper/RAG',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'LangChain', 'RAG', 'SSE'],
    ctaLabel: 'view repo',
  },
];

const projects = [
  {
    title: 'dev-atlas',
    eyebrow: 'open source',
    summary: 'Engineering notes on JavaScript internals, TypeScript, system design, databases, and DevOps.',
    description: 'An open-source knowledge base where I write down the concepts I want to understand properly, including JavaScript internals, TypeScript, system design, databases, and DevOps.',
    link: 'https://atypicalesper.github.io/dev-atlas',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Markdown'],
    ctaLabel: 'open site',
  },
  {
    title: 'Music Analyzer',
    eyebrow: 'music product',
    summary: 'A Spotify dashboard for exploring listening habits, recommendations, and music compatibility with other users.',
    description: 'Music Analyzer turns Spotify data into personal listening dashboards, top tracks and artists, audio summaries, recommendations, public profiles, and taste matching with other listeners.',
    link: 'https://github.com/atypicalesper/spotify-dashboard',
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'Spotify API', 'React'],
    ctaLabel: 'view repo',
  },
  {
    title: 'GameZone',
    eyebrow: 'real-time platform',
    summary: 'A multiplayer games app with live chat, leaderboards, and JWT authentication.',
    description: 'GameZone includes Rock Paper Scissors, Tic Tac Toe, and Trivia Quiz, with live chat and global leaderboards in an Nx monorepo.',
    link: 'https://github.com/atypicalesper/games-games',
    tags: ['NestJS', 'Next.js', 'Socket.io', 'Prisma', 'TypeScript', 'Nx', 'Tailwind'],
    ctaLabel: 'view repo',
  },
  {
    title: 'Drumkit',
    eyebrow: 'playful build',
    summary: 'A keyboard-controlled drum machine built mostly because making noise in the browser is fun.',
    description: 'Map keyboard keys to drum sounds and use them to make questionable drumrolls on demand.',
    link: '/bonus',
    tags: ['JavaScript', 'HTML', 'CSS', 'jQuery'],
    ctaLabel: 'try demo',
  },
];

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
      'Built digital verification flows using PAN, Aadhaar eKYC, and Digilocker for customer onboarding.',
      'Ran the services on AWS with Docker and used Redis to reduce repeated work in busy financial workflows.',
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
    scope: 'MQTT ingestion, event processing, alert orchestration, multi-channel notifications, AWS deployment.',
    tags: ['Node.js', 'MQTT', 'PostgreSQL', 'AWS SNS', 'Twilio'],
    points: [
      'Built a real-time IoT alerting system using MQTT to process sensor data from garbage trucks and detect fire incidents.',
      'Implemented automated multi-channel notifications via Twilio (SMS/Calls) and AWS SNS for instant incident response.',
      'Designed backend services for event processing, alert orchestration, and incident logging using Node.js and PostgreSQL.',
      'Automated operational notification flows and background jobs that reduced manual coordination overhead during incident handling.',
      'Deployed and monitored services on AWS, ensuring high availability and low-latency alert delivery.',
    ],
  },
  {
    title: 'Direct Care Staffing',
    domain: 'healthcare',
    result: 'Healthcare staffing platform where nurses could discover shifts, join patient care workflows, and operate inside a secure compliance-heavy system.',
    scope: 'Shift matching, patient workflow support, encrypted API layers, credential management, HIPAA-minded access control.',
    tags: ['Node.js', 'PostgreSQL', 'Sequelize', 'PostGIS', 'Encryption'],
    points: [
      'Designed backend data models for nurses, shifts, credentials, certifications, patient assignments, and staffing workflows.',
      'Implemented secure API layers with encryption and access controls to support HIPAA-compliant handling of sensitive healthcare data.',
      'Built shift discovery and matching flows so nurses could find available work and join patient care workflows.',
      'Leveraged PostGIS for location-aware workforce deployment and staffing analytics.',
      'Built the staffing backend with Node.js, Sequelize, and PostgreSQL.',
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
      'Deployed the application on AWS EC2 and configured Nginx for production traffic.',
    ],
  },
  {
    title: 'Biotech Imaging Platform',
    domain: 'biotech',
    result: 'A research platform with faster frontend builds and cloud-backed processing for biological data.',
    scope: 'React/Vite frontend, Flask APIs, biological data visualization, cloud services, auth and observability.',
    tags: ['React', 'TypeScript', 'Vite', 'MUI', 'Plotly.js', 'Python', 'Flask', 'GCP'],
    points: [
      'Built a React 18 + TypeScript frontend for visualizing cell sorting and imaging data, migrated from Create React App to Vite for significantly faster builds and HMR.',
      'Developed Flask REST APIs using Google App Engine Flex, Cloud Endpoints, and Cloud Run to process cell data.',
      'Implemented interactive biological data visualizations using a custom Plotly.js bundle, enabling researchers to explore large-scale imaging datasets with minimal bundle overhead.',
      'Integrated Auth0 authentication and Datadog observability, enforcing secure access control and real-time performance monitoring across the platform.',
    ],
  },
  {
    title: 'RAG Chatbot POC',
    domain: 'ai',
    result: 'Internal proof of concept that combined document ingestion, retrieval, and LLM responses into a usable question-answering workflow.',
    scope: 'Document ingestion, vector retrieval, prompt orchestration, backend API design, early product validation.',
    tags: ['Node.js', 'Pinecone', 'LLM', 'RAG', 'Document Ingestion'],
    points: [
      'Shipped a RAG chatbot proof of concept to answer questions over uploaded content using retrieval-augmented generation patterns.',
      'Built the document ingestion and retrieval flow so responses could cite information from the uploaded content.',
      'Used vector search infrastructure to connect chunked knowledge sources with query-time context assembly.',
      'Wrapped the retrieval pipeline in a usable flow that the team could test with real documents and questions.',
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
        Things I&apos;ve built for work, for learning, and occasionally just because the idea was fun.
      </p>

      <div className="section featured-work-section">
        <h2>ai systems</h2>
        <p className="section-intro">
          RAG, prompt tooling, local models, and a few experiments built to understand how LLM systems behave outside a demo.
        </p>
      </div>

      <AnimatedGrid className="grid">
        {aiProjects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </AnimatedGrid>

      <div className="section project-group-section">
        <h2>projects</h2>
        <p className="section-intro">
          Side projects across developer education, music, games, and browser experiments.
        </p>
      </div>

      <AnimatedGrid className="grid">
        {projects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </AnimatedGrid>

      <div className="section client-work-section">
        <h2>client work</h2>
        <p className="section-intro">
          Client projects across fintech, healthcare, IoT, construction, biotech, and applied AI. Open a project for the technical details.
        </p>
        <div className="featured-client-grid">
          {featuredClientWork.map((item) => (
            <article key={item.title} className="featured-client-card">
              <span className="featured-client-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <p className="featured-client-impact">{item.impact}</p>
              <div className="featured-client-details">
                {item.details.map((detail) => (
                  <span key={detail} className="featured-client-detail">{detail}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
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
                <span className="job-header-inner">
                  <span className="title">
                    {p.title}
                    <span className="client-domain-badge">{p.domain}</span>
                  </span>
                  <span className="job-header-meta">
                    <span className="exp-meta">{p.tags.join(' · ')}</span>
                    <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
                  </span>
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
