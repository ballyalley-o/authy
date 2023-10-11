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
import * as _ from '@styles'
import * as sets from '@sets'
import { PATH, SNACKS, HEADER } from '@constants'

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [signoutAuth, { isLoading }] = useSignoutMutation()

  const handleSignOut = async () => {
    try {
      await signoutAuth().unwrap()
      dispatch(signout())
      toast.success(SNACKS.signout)
      navigate(PATH.home)
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <header>
      <Navbar {...sets.navbar}>
        <Container className={_.StyledNavContainer}>
          <LinkContainer to={PATH.home}>
            <Navbar.Brand className={_.StyledNavBrand}>
              <AuthyIcon />
              {HEADER.brand}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls={sets.nav_toggle} />
          <Navbar.Collapse id={sets.nav_toggle}>
            <Nav className={_.StyledNavCollapse}>
              {userInfo ? (
                <>
                  <NavDropdown title={userInfo.name} {...sets.nav_dropdown}>
                    <LinkContainer to={PATH.profile}>
                      <NavDropdown.Item>{HEADER.profile}</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={handleSignOut}
                      disabled={isLoading}
                    >
                      {HEADER.signout}
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <LinkContainer to={PATH.signin}>
                    <Nav.Link>{HEADER.signin}</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={PATH.register}>
                    <Nav.Link>{HEADER.register}</Nav.Link>
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
