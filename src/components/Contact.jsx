import { Container, Button } from "react-bootstrap"

export default function Contact() {
  return (
    <section id="contact" className="bg-dark text-white py-5">
      <Container className="text-center">
        <h2>Contact Me</h2>
        <p>Email: bhargavanaidupola234@gmail.com</p>
        <Button
          variant="outline-light"
          href="mailto:bhargavanaidupola234@gmail.com"
        >
          Send Email
        </Button>
      </Container>
    </section>
  )
}
