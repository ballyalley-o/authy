/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap'
import { signout } from '@slices/auth'
// @hooks
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useSignoutMutation } from '@slices/user'
// @components
import { LinkContainer } from 'react-router-bootstrap'
// @icon
import { AuthyIcon } from '@icons'
// @assets
import { toast } from 'react-toastify'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signoutAuth, { isLoading }] = useSignoutMutation()

  const handleSignOut = async () => {
    try {
      await signoutAuth().unwrap()
      dispatch(signout())
      toast.success('Sign out successful')
      navigate('/')
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <header>
      <Navbar bg='warning' expand='lg' collapseOnSelect>
        <Container className='container'>
          <LinkContainer to='/'>
            <Navbar.Brand className='brand text-black text-italic align-center flex-col italic block Merriweather'>
              <AuthyIcon />
              Authy
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto text-black'>
              {userInfo ? (
                <>
                  <NavDropdown
                    title={userInfo.name}
                    id='username'
                    className='text-primary'
                    style={{ color: 'red' }}
                  >
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={handleSignOut}
                      disabled={isLoading}
                    >
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to='/signIn'>
                    <Nav.Link className={userInfo ? 'd-none' : 'text-black'}>
                      Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <Nav.Link className={userInfo ? 'd-none' : 'text-black'}>
                      Register
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
