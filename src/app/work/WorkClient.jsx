'use client';
import { useState } from 'react';
import Card from '../../components/Card';
import AnimatedGrid from '../../components/AnimatedGrid';
import AnimatedList from '../../components/AnimatedList';

const featuredClientWork = [
  {
    title: 'Loan Management System',
    label: 'high-trust fintech',
    summary: 'Migrated a legacy lending platform into scalable NestJS microservices while rebuilding verification-heavy onboarding and user-management workflows.',
    impact: '~40% improvement in scalability, maintainability, and deployment efficiency.',
    details: ['Microservices migration', 'KYC + verification flows', 'AWS + Redis scaling'],
  },
  {
    title: "That's My Jam",
    label: 'real-time product',
    summary: 'Shipped live bidding, scheduling, and payment infrastructure for event-driven music experiences with strong real-time interaction requirements.',
    impact: 'Improved transaction reliability and contributed to a 20% revenue increase.',
    details: ['WebSockets', 'Stripe flows', 'Role-aware APIs'],
  },
  {
    title: 'First Fire',
    label: 'iot alerting',
    summary: 'Built an ingestion and alert pipeline that converted live truck sensor data into fast incident-response notifications.',
    impact: 'Enabled low-latency fire detection and multi-channel operational alerting.',
    details: ['MQTT + EMQX', 'Twilio + AWS SNS', 'Background job automation'],
  },
];

const flagshipProjects = [
  {
    title: 'dev-atlas',
    eyebrow: 'open source',
    summary: 'Deep-dive engineering knowledge base built for developers who want understanding, not just snippets.',
    description: 'Open-source developer knowledge base — deep-dive docs on JS internals, TypeScript, system design, databases, DevOps, and more. Built for engineers who want to actually understand the stack.',
    link: 'https://atypicalesper.github.io/dev-atlas',
    tags: ['Next.js', 'TypeScript', 'GSAP', 'Tailwind', 'Markdown'],
    ctaLabel: 'open site',
  },
  {
    title: 'Prompt Lab',
    eyebrow: 'llm tooling',
    summary: 'On-device prompt engineering and observability dashboard for comparing local models, A/B testing prompts, and tracking token economics.',
    description: 'A local LLM observability and prompt engineering dashboard running entirely on-device via Ollama. Includes single-run streaming, side-by-side model comparison, A/B prompt testing, token/cost tracking, hardware monitoring, saved prompts, and persisted request history.',
    link: 'https://github.com/atypicalesper/prompt-lab',
    tags: ['NestJS', 'Next.js 15', 'Ollama', 'SQLite', 'SSE', 'React'],
    ctaLabel: 'view repo',
  },
  {
    title: 'GenLea',
    eyebrow: 'agentic pipeline',
    summary: 'Automated B2B lead generation engine that combines scraping, enrichment, scoring, and LLM-assisted workflows in a microservices setup.',
    description: 'A lead generation platform for software-services outreach that discovers companies, enriches hiring and contact signals, estimates Indian-origin team presence, scores leads against a strict ICP, and exports only the strongest prospects. Built as a microservices monorepo with queue-based workers, a Fastify API, and a Python microservice.',
    link: 'https://github.com/atypicalesper/genlea',
    tags: ['Node.js', 'BullMQ', 'MongoDB', 'Redis', 'Fastify', 'Python'],
    ctaLabel: 'view repo',
  },
  {
    title: 'RAG Chat',
    eyebrow: 'ai product',
    summary: 'Multi-tenant RAG chat frontend with streaming responses, uploads, and tenant-isolated context.',
    description: 'Multi-tenant RAG chatbot frontend with SSE streaming, document upload, and per-tenant context isolation. Paired with a FastAPI + LangChain + Chroma backend.',
    link: 'https://github.com/atypicalesper/COMET-fy-q4-25-26',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'SSE', 'FastAPI', 'LangChain'],
    ctaLabel: 'view repo',
  },
];

const exploratoryProjects = [
  {
    title: 'Music Analyzer',
    eyebrow: 'music product',
    summary: 'Spotify-powered listening dashboard with taste profiles, compatibility matching, recommendations, and public listener pages.',
    description: 'A music discovery and listening analysis product built around Spotify data. Includes Spotify sign-in, personal listening dashboards, top tracks and artists, audio feature summaries, recommendations, public listener profiles, taste matchmaking, and an explore experience for discovering other listeners.',
    link: 'https://github.com/atypicalesper/spotify-dashboard',
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'Prisma', 'Spotify API', 'React'],
    ctaLabel: 'view repo',
  },
  {
    title: 'GameZone',
    eyebrow: 'real-time platform',
    summary: 'Multiplayer games, live chat, leaderboards, and JWT auth in a full-stack monorepo.',
    description: 'Real-time multiplayer gaming platform with Rock Paper Scissors, Tic Tac Toe, and Trivia Quiz. Live chat, global leaderboards, and JWT auth in an Nx monorepo.',
    link: 'https://github.com/atypicalesper/games-games',
    tags: ['NestJS', 'Next.js', 'Socket.io', 'Prisma', 'TypeScript', 'Nx', 'Tailwind'],
    ctaLabel: 'view repo',
  },
  {
    title: 'VectorLens',
    eyebrow: 'learning lab',
    summary: 'Browser-only semantic search lab for exploring retrieval, embeddings, indexing strategies, and latency-versus-recall tradeoffs.',
    description: 'A tiny local semantic search playground built to teach vector retrieval internals through hands-on experimentation. Covers embedding tradeoffs, similarity metrics, chunking, ANN strategies, metadata filtering, hybrid retrieval, and evaluation without requiring API keys or external services.',
    link: 'https://github.com/atypicalesper/understanding-embeddings-semantic-retrieval',
    tags: ['JavaScript', 'Semantic Search', 'Embeddings', 'ANN', 'Browser'],
    ctaLabel: 'view repo',
  },
  {
    title: 'Drumkit',
    eyebrow: 'playful build',
    summary: 'Keyboard-powered drum machine with instant feedback and a more fun-than-useful personality.',
    description: 'A time-killer drum machine — map keyboard keys to drum sounds and make cool drumrolls for trolls and thug-life moments.',
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
      'Delivered digital verification workflows across PAN, Aadhaar eKYC, and Digilocker integrations for high-trust onboarding journeys.',
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
      'Automated operational notification flows and background jobs that reduced manual coordination overhead during incident handling.',
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
  {
    title: 'RAG Chatbot POC',
    domain: 'ai',
    result: 'Internal proof of concept that combined document ingestion, retrieval, and LLM responses into a usable question-answering workflow.',
    scope: 'Document ingestion, vector retrieval, prompt orchestration, backend API design, early product validation.',
    tags: ['Node.js', 'Pinecone', 'LLM', 'RAG', 'Document Ingestion'],
    points: [
      'Shipped a RAG chatbot proof of concept to answer questions over uploaded content using retrieval-augmented generation patterns.',
      'Built the document ingestion and retrieval flow to support grounded responses instead of generic model output.',
      'Used vector search infrastructure to connect chunked knowledge sources with query-time context assembly.',
      'Turned backend AI experimentation into a product-shaped workflow that could be tested with real use cases.',
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
        <div className="work-chip-row" aria-label="Project categories">
          <span className="work-chip">real-time systems</span>
          <span className="work-chip">high-trust workflows</span>
          <span className="work-chip">agentic tooling</span>
          <span className="work-chip">consumer product ideas</span>
        </div>
      </div>

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

      <div className="section project-group-section">
        <h2>flagship builds</h2>
        <p className="section-intro">
          The strongest self-directed work for recruiters and hiring teams who want a fast read on architecture, product sense, and technical range.
        </p>
      </div>

      <AnimatedGrid className="grid">
        {flagshipProjects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </AnimatedGrid>

      <div className="section side-projects-note">
        <h2>explorations</h2>
        <p className="section-intro">
          These are lighter, more exploratory builds where I test product ideas, interaction patterns, and system concepts with a bit more playfulness.
        </p>
      </div>

      <AnimatedGrid className="grid grid--compact">
        {exploratoryProjects.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </AnimatedGrid>

      <div className="section client-work-section">
        <h2>client work</h2>
        <p className="section-intro">
          Selected delivery across fintech, healthcare, IoT, construction, biotech, and applied AI, framed around scope and outcomes instead of just stack names.
        </p>
        <div className="work-chip-row" aria-label="Client work categories">
          <span className="work-chip">fintech</span>
          <span className="work-chip">healthcare</span>
          <span className="work-chip">iot</span>
          <span className="work-chip">biotech</span>
          <span className="work-chip">applied ai</span>
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
