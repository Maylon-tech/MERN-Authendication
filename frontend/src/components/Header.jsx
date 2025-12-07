
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' varinat='dark' expand='' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>MERN Auth Application</Navbar.Brand>
          </LinkContainer>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                  <LinkContainer to='/login'>                  
                    <Nav.Link>
                        <FaSignInAlt /> Sign In
                    </Nav.Link>
                  </LinkContainer>  

                  <LinkContainer to='register'>                  
                    <Nav.Link>
                        <FaSignOutAlt /> Sign Out
                    </Nav.Link>
                  </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
