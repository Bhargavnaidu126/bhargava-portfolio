import { Navbar, Nav, Container } from "react-bootstrap"
import { useEffect, useState } from "react"


export default function CustomNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Navbar
  expand="lg"
  fixed="top"
  variant="dark"
  className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""} py-2`}
>

      <Container>
        {/* LOGO */}
       <Navbar.Brand href="#home" className="logo-text-wrapper">
  <span className="logo-monogram">BN</span>
  <span className="logo-name">Bhargava Naidu</span>
</Navbar.Brand>


        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
