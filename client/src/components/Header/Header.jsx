import { Navbar, Nav, Container } from 'react-bootstrap'
// components
import { LinkContainer } from 'react-router-bootstrap'
// icon
import { AuthyIcon } from '@icons'

const Header = () => {
  return (
    <header>
      <Navbar bg='warning' variant='dark' expand='lg' collapseOnSelect>
        <Container className='container'>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand text-black text-italic align-center flex-col italic'>
              {/* <FaSchlix /> */}
              <AuthyIcon />
              Authy
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-black'>
              <LinkContainer to='/signIn'>
                <Nav.Link className='text-black DMSans'>Sign In</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/register'>
                <Nav.Link className='text-black DMSans'>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
