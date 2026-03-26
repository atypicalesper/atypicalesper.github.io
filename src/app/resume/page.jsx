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
      <ExperienceAccordion />
      <Skills />
      <Education />
    </section>
  )
}
