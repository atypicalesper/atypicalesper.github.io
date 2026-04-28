import Skills from './Skills'
import Education from './Education'
import ExperienceAccordion from './ExperienceAccordion'

export const metadata = {
  title: 'Experience',
  description:
    'Software Developer with experience building fintech, healthcare, IoT, and entertainment platforms at Copper Digital. NestJS, Node.js, PostgreSQL, AWS.',
  alternates: { canonical: '/resume/' },
  openGraph: { url: 'https://atypicalesper.github.io/resume/' },
};

export default function ResumePage() {
  return (
    <section className="resume">
      <div className="resume-hero section">
        <div className="resume-hero-kicker">experience snapshot</div>
        <h1 className="resume-title">Backend engineer with hands-on delivery across high-trust and real-time systems.</h1>
        <p className="section-intro resume-intro">
          Experience building fintech, healthcare, IoT, biotech, and consumer-facing systems with a focus on scalable APIs, integrations, architecture quality, and production ownership.
        </p>

        <div className="resume-summary-grid" aria-label="Resume highlights">
          <article className="resume-summary-card">
            <span className="resume-summary-value">Node.js + NestJS</span>
            <span className="resume-summary-label">Core backend stack across product and platform work</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">5 domains</span>
            <span className="resume-summary-label">Fintech, healthcare, IoT, entertainment, and biotech delivery</span>
          </article>
          <article className="resume-summary-card">
            <span className="resume-summary-value">Architecture to production</span>
            <span className="resume-summary-label">Comfortable owning design, implementation, rollout, and iteration</span>
          </article>
        </div>
      </div>

      <ExperienceAccordion />
      <Skills />
      <Education />
    </section>
  )
}
