'use client'

import { useState } from 'react'
import AnimatedList from '../../components/AnimatedList'

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Crownstack Technologies',
    period: 'Jan 2026 – May 2026',
    location: 'Noida, UP',
    summary: 'Worked across a bioinformatics platform, a multi-tenant credential product, and API-based workflow automation.',
    points: [
      'Built async data pipelines on GCP (Cloud Functions, Cloud Run, Pub/Sub) for high-volume lab-data ingestion, run-status updates, and image export on Deepcell, a bioinformatics cell-analysis platform.',
      'Managed infrastructure with Terraform for two deployment models: GCP App Engine Flex for SaaS and Docker/Nginx for customer-managed environments.',
      'Built QuickCertify’s public credential-verification flow, including shareable no-login pages, secure REST APIs, URL-enumeration protection, and client-side caching.',
      'Built an immutable audit-log module with JSONB before/after snapshots and indexed actor/target/action lookups, plus a full-stack credential Design module covered by Playwright e2e specs.',
      'Implemented fine-grained RBAC across backend guards and frontend navigation, and a FastAPI webhook service that auto-provisions Basecamp projects from Apparatix order events.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Raghavi Finance (Surya Loan)',
    period: 'Jul 2025 – Dec 2025',
    location: 'Delhi',
    summary: 'Modernized a lending platform and built the KYC, authorization, and audit flows around it.',
    points: [
      'Migrated a legacy PHP monolith to a NestJS microservices architecture (MySQL, TypeORM, Redis, AWS), improving scalability and maintainability by ~40% for a high-volume digital lending platform.',
      'Built KYC and risk-assessment microservices integrating Aadhaar eKYC, PAN verification, Account Aggregator, and bank-statement analysis for instant, compliant loan decisioning.',
      'Architected a User Management Service (UMS) with RBAC, custom authorization, and audit logs for sensitive financial operations.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Sept 2022 – May 2025',
    location: 'Gurugram, HR',
    summary: 'Built backend systems for healthcare, IoT, payments, and AI projects across several client teams.',
    points: [
      'Delivered a RAG-based AI chatbot framework for context-aware document Q&A using OpenAI LLMs, embeddings, and Pinecone vector storage.',
      'Integrated Stripe into a real-time song-bidding platform, improving transaction reliability and driving a 20% revenue increase.',
      'Built MQTT pub/sub pipelines to process real-time IoT sensor data and trigger fire-incident alerts from garbage-truck sensors.',
      'Enforced HIPAA compliance through encrypted APIs and access controls on a healthcare staffing platform; used PostGIS for location-aware workforce deployment.',
      'Automated notifications, backups, and data sync via cron jobs with Twilio and AWS SNS, cutting manual overhead by ~30%; mentored junior engineers and led code reviews.',
    ],
  },
]

export default function ExperienceAccordion() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <div className="section exp-section">
      <h2>experience</h2>

      <AnimatedList>
        {experience.map((job, i) => (
          <div key={`${job.company}-${job.role}`} className={`subsection exp-item${open === i ? ' exp-open' : ''}`}>
            <button
              type="button"
              className="job-header"
              onClick={() => toggle(i)}
              aria-expanded={open === i}
              aria-controls={`experience-item-${i}`}
            >
              <span className="job-header-inner">
                <span className="title">
                  {job.company}
                  <span className="exp-role-badge">{job.role}</span>
                </span>
                <span className="job-header-meta">
                  <span className="exp-meta">{job.period} · {job.location}</span>
                  <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
                </span>
              </span>
            </button>

            <p className="experience-summary">{job.summary}</p>
            <div id={`experience-item-${i}`} className={`desc-collapse${open === i ? ' desc-collapse--open' : ''}`}>
              <ul className="desc-list">
                {job.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}
