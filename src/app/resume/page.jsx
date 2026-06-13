import Skills from './Skills'
import Education from './Education'
import ExperienceAccordion from './ExperienceAccordion'

export const metadata = {
  title: 'Experience',
  description:
    'Software Engineer with 3.5+ years across fintech, healthcare, and B2B SaaS — NestJS microservices, full-stack delivery, and production GenAI/RAG. Node.js, TypeScript, PostgreSQL, AWS, GCP.',
  alternates: { canonical: '/resume/' },
  openGraph: { url: 'https://atypicalesper.github.io/resume/' },
};

export default function ResumePage() {
  return (
    <section className="resume">
      <div className="resume-hero section">
        <div className="resume-hero-kicker">experience snapshot</div>
        <h1 className="resume-title">Backend &amp; full-stack engineer delivering across fintech, SaaS, and high-trust systems.</h1>
        <p className="section-intro resume-intro">
          3.5+ years building scalable backend and full-stack systems for fintech, healthcare, and B2B SaaS — with a focus on secure APIs, microservices, cloud architecture, and production GenAI.
        </p>

        <div className="resume-summary-grid" aria-label="Resume highlights">
          <article className="resume-summary-card">
            <span className="resume-summary-value">Node.js + NestJS</span>
            <span className="resume-summary-label">Core stack, with TypeScript and Python across the codebase</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">Fintech &amp; SaaS</span>
            <span className="resume-summary-label">Plus healthcare, IoT, and biotech delivery</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">GenAI in production</span>
            <span className="resume-summary-label">RAG, embeddings, and Pinecone shipped in real products</span>
          </article>
        </div>
      </div>

      <ExperienceAccordion />
      <Skills />
      <Education />
    </section>
  )
}
