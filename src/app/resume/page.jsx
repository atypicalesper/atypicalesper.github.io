import Skills from './Skills'
import Education from './Education'
import ExperienceAccordion from './ExperienceAccordion'

export const metadata = {
  title: 'Experience',
  description:
    'Software Engineer with 3.5+ years building NestJS microservices, full-stack products, and RAG systems across fintech, healthcare, and B2B SaaS.',
  alternates: { canonical: '/resume/' },
  openGraph: { url: 'https://atypicalesper.github.io/resume/' },
};

export default function ResumePage() {
  return (
    <section className="resume">
      <div className="resume-hero section">
        <div className="resume-hero-kicker">experience snapshot</div>
        <h1 className="resume-title">Backend and full-stack engineer working across fintech, SaaS, and systems that handle sensitive data.</h1>
        <p className="section-intro resume-intro">
          I&apos;ve spent 3.5+ years building APIs, microservices, cloud workflows, and full-stack products for fintech, healthcare, and B2B SaaS. My recent work also includes production RAG and GenAI systems.
        </p>

        <div className="resume-summary-grid" aria-label="Resume highlights">
          <article className="resume-summary-card">
            <span className="resume-summary-value">Node.js + NestJS</span>
            <span className="resume-summary-label">My main stack, alongside TypeScript and Python</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">Fintech &amp; SaaS</span>
            <span className="resume-summary-label">With projects in healthcare, IoT, and biotech</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">GenAI in production</span>
            <span className="resume-summary-label">RAG, embeddings, and Pinecone used in working products</span>
          </article>
        </div>
      </div>

      <Skills />
      <ExperienceAccordion />
      <Education />
    </section>
  )
}
