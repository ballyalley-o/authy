import { Navbar, Nav, Container } from 'react-bootstrap'
// import { FaSchlix } from 'react-icons/fa'
// icon
import { AuthyIcon } from '@icons'

const Header = () => {
  return (
    <header>
      <Navbar bg='warning' variant='dark' expand='lg' collapseOnSelect>
        <Container className='container'>
          <Navbar.Brand
            href='/'
            className='brand text-black text-italic align-center flex-col italic'
          >
            {/* <FaSchlix /> */}
            <AuthyIcon />
            Authy
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-black'>
              <Nav.Link href='/login' className='text-black DMSans'>
                Sign In
              </Nav.Link>
              <Nav.Link href='/signup' className='text-black DMSans'>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
