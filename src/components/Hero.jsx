import { Container, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import { FaGithub, FaDownload } from "react-icons/fa"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
<section
  id="home"
  className="hero-bg text-white min-vh-100 d-flex align-items-center pt-5"
>


      <Container className="text-center position-relative" style={{ zIndex: 1, maxWidth: "900px" }}>

        <motion.img
          src={profile}
          alt="Bhargava Naidu"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-circle mb-4"
          style={{ width: "140px", height: "140px", objectFit: "cover" }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-4 fw-bold"
        >
          Bhargava Naidu
        </motion.h1>

        <p className="lead mt-3">
          Computer Science Graduate | Data Analytics & Web Development
        </p>

        <div className="mt-4">
          <Button
            variant="primary"
            className="me-3"
            href="/Bhargava-Naidu-Resume.pdf"
            download
          >
            <FaDownload className="me-2" />
            Resume
          </Button>

          <Button
            variant="outline-light"
            href="https://github.com/Bhargavnaidu126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="me-2" />
            GitHub
          </Button>
        </div>
      </Container>
    </section>
  )
}
