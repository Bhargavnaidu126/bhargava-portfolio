import { Container, Row, Col, Card } from "react-bootstrap"
import { motion } from "framer-motion"

export default function Skills() {
  return (
    <section id="skills" className="py-5 light-section">

      <Container>
        <h2 className="text-center mb-4 section-title">Skills</h2>

        <Row>
          {[
            {
              title: "Frontend",
              items: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
            },
            {
              title: "Data & Analytics",
              items: ["SQL", "Power BI", "Excel", "DAX", "Power Query"],
            },
            {
              title: "Programming",
              items: ["Python", "Java", "C", "DSA"],
            },
          ].map((skill, index) => (
            <Col md={4} className="mb-4" key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="mb-3 shadow">
                  <Card.Body className="text-center">

                    <Card.Title className="fw-bold mb-3">
{skill.title}</Card.Title>
                    <ul className="mb-0">

                      {skill.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
