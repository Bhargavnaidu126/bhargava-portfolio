import { Container } from "react-bootstrap"

export default function Education() {
  return (
    <section id="education" className="py-5 light-section">

      <Container>
        <h2 className="text-center mb-4 section-title">Education</h2>
        <ul className="list-group shadow-sm">

          <li className="list-group-item">
            <strong>B.Tech CSE</strong> – Lendi Institute (GPA: 8.5)
          </li>
          <li className="list-group-item">
            <strong>Intermediate (MPC)</strong> – GPA: 8.7
          </li>
          <li className="list-group-item">
            <strong>SSC</strong> – GPA: 8.5
          </li>
        </ul>
      </Container>
    </section>
  )
}
