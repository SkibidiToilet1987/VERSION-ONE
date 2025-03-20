import { Container, Navbar, Nav } from 'react-bootstrap';

const MainNavigation = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://www.pngplay.com/wp-content/uploads/6/Energy-Logo-PNG-Clipart-Background.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <strong>Rolsa Technologies</strong>
          </Navbar.Brand>
          <Nav.Link class="fs-5 text-dark" href="/login"><strong>Login</strong></Nav.Link>
          <Nav.Link class="fs-5 text-dark" href="/register"><strong>Register</strong></Nav.Link>
          <Nav.Link class="fs-5 text-dark" href="/green-products"><strong>Green Products</strong></Nav.Link>
        </Container>
      </Navbar>

    </>
  );
}

export default MainNavigation