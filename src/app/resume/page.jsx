import Skills from './Skills'
import Education from './Education'
import ExperienceAccordion from './ExperienceAccordion'

export default function ResumePage() {
  return (
    <section className="resume">
      <Skills />
      <ExperienceAccordion />
      <Education />
    </section>
  )
}