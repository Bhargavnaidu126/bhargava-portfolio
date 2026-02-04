import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { FaGithub, FaChartBar } from "react-icons/fa"
import netflix from "../assets/netflix-ui.webp"
import zomato from "../assets/zomato-dashboard.webp"

export default function Projects() {
  return (
    <section id="projects" className="py-5 light-section">

      <Container>
        <h2 className="text-center mb-4 section-title">Projects</h2>

        <Row>
          <Col md={6}>
            <motion.div whileHover={{ y: -6 }}>
              <Card className="shadow mb-4">
                <motion.img
                  src={netflix}
                  alt="Netflix UI"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="card-img-top"
                />

                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    Netflix-Inspired Streaming UI
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Responsive UI with interactive cards and modern layout.
                  </Card.Text>
                  <Button variant="dark">
                    <FaGithub className="me-2" />
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={6}>
            <motion.div whileHover={{ y: -6 }}>
              <Card className="shadow mb-4">
                <motion.img
                  src={zomato}
                  alt="Zomato Dashboard"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="card-img-top"
                />

                <Card.Body>
                  <Card.Title className="fw-bold mb-3">
                    Zomato Sales Dashboard
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Power BI dashboard with KPI tracking and sales insights.
                  </Card.Text>
                  <Button variant="success">
                    <FaChartBar className="me-2" />
                    Dashboard
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
