'use client'

import { useState } from 'react'
import AnimatedList from '../../components/AnimatedList'

const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'Crownstack Technologies',
    period: 'Jan 2026 – Present',
    location: 'Noida, UP',
    points: [
      'Build and ship backend features for high-traffic enterprise applications, owning delivery from design to production.',
      'Design service architectures and APIs optimized for performance-critical, scalable workflows.',
      'Drive engineering quality through code reviews, system optimization, and technical standards.',
      'Collaborate with product and design to translate business requirements into clean, production-ready implementations.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Kasar Credit and Capital Pvt. Ltd.',
    period: 'Jul 2025 – Dec 2025',
    location: 'Delhi',
    points: [
      'Migrated legacy PHP monolith to NestJS microservices, improving scalability and maintainability by 40%.',
      'Built KYC and risk-assessment services integrating Aadhaar eKYC, PAN, Account Aggregator, and bank statement analysis for instant, compliant loan decisioning.',
      'Designed a User Management Service (UMS) with RBAC, custom auth/session logic, and audit logging for high-trust financial operations.',
      'Delivered digital verification pipelines covering PAN, Aadhaar eKYC, and Digilocker integrations.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Dec 2022 – May 2025',
    location: 'Gurugram, HR',
    points: [
      'Integrated Stripe into a real-time song-bidding platform, improving transaction reliability and driving a 20% revenue increase.',
      'Built MQTT/EMQX pub/sub pipelines to process real-time IoT sensor data and trigger fire incident alerts from garbage trucks.',
      'Enforced HIPAA compliance through encrypted APIs and access controls across a healthcare staffing platform.',
      'Shipped a RAG chatbot POC — document ingestion pipeline backed by Pinecone vector search and LLM-driven responses.',
      'Automated notifications, backups, and data sync via cron jobs with Twilio and AWS SNS, cutting manual overhead by 30%.',
      'Mentored junior engineers; led code reviews and drove cross-functional delivery across multiple client projects.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Sept 2022 – Dec 2022',
    location: 'Gurugram, HR',
    points: [
      'Built RESTful APIs alongside dev, design, and QA teams; documented with Swagger and Postman.',
      'Participated in code reviews, sprint planning, and standups; maintained Git workflows for team collaboration.',
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
              <span className="title">
                {i === 0 && <span className="current-dot" />}
                {job.company}
                <span className="exp-role-badge">{job.role}</span>
              </span>
              <span className="date">
                <span className="exp-meta">{job.period} · {job.location}</span>
                <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
              </span>
            </button>

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
