import './App.css';
import { Nav, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <a href="/">
            <img src=".src/logo-reddit.png" alt="logo" height="70" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#photos">Photos</Nav.Link>
            <Nav.Link href="#Vidéos">Vidéos</Nav.Link>
            <Nav.Link href="#Tops">Tops</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link button="#Reddit">View on Reddit</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
