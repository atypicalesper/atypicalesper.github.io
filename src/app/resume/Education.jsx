import AnimatedList from '../../components/AnimatedList'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'J C Bose University of Science & Technology, YMCA',
    period: 'Aug 2018 – Aug 2022',
    note: 'CGPA: 8.268 / 10.00',
  },
]

export default function Education() {
  return (
    <div className="section">
      <h2>education</h2>

      <AnimatedList delay={0.1}>
        {education.map((e) => (
          <div className="resume-company" key={e.institution}>
            <span className="resume-role">{e.degree}</span>
            <span className="resume-meta">
              {e.institution} · {e.period}
            </span>
            <span className="resume-meta">{e.note}</span>
          </div>
        ))}
      </AnimatedList>
    </div>
  )
}