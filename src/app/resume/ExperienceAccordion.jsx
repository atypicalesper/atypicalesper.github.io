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
      'Building scalable full-stack product features across high-traffic enterprise applications.',
      'Designing backend architectures and APIs for performance-critical workflows.',
      'Driving engineering quality via code reviews and system optimization.',
      'Collaborating with product and design teams on customer-facing features.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Kasar Credit and Capital Pvt. Ltd.',
    period: 'Jul 2025 – Dec 2025',
    location: 'Delhi',
    points: [
      'Developed microservice APIs for digital lending workflows (KYC, verification, loan decisioning).',
      'Integrated bank validation systems (Penny Drop, statement analysis).',
      'Built credit automation pipelines (CIBIL, UAN verification).',
      'Implemented WhatsApp & Email notification infrastructure.',
      'Enabled automated CAM decisioning logic.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Copper Digital India Pvt. Ltd.',
    period: 'Dec 2022 – May 2025',
    location: 'Gurugram, HR',
    points: [
      'Delivered backend systems across IoT, healthcare, fintech, and AI.',
      'Architected scalable REST services and distributed data pipelines.',
      'Led code reviews and mentored junior engineers.',
      'Collaborated cross-functionally to deliver production features.',
    ],
  },
]

export default function ExperienceAccordion() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <div className="section">
      <h2>experience</h2>

      <AnimatedList>
        {experience.map((job, i) => (
          <div key={job.company} className={`subsection exp-item${open === i ? ' exp-open' : ''}`}>
            <div className="job-header" onClick={() => toggle(i)}>
              <p className="title">
                {i === 0 && <span className="current-dot" />}
                {job.company}
              </p>
              <p className="date">
                <span className="exp-meta">{job.role} · {job.period} · {job.location}</span>
                <span className={`exp-chevron${open === i ? ' exp-chevron--open' : ''}`}>›</span>
              </p>
            </div>

            <div className={`desc-collapse${open === i ? ' desc-collapse--open' : ''}`}>
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