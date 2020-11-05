import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

import { NavLink as RNV } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoEyebleach from '../Images/logoEyebleach.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="#home">
          <a href="/">
            <img src={logoEyebleach} alt="logo" height="70" />
          </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RNV} to="/Photos">
                Photos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNV} to="/Vidéos">
                Vidéos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RNV} to="/Tops">
                Tops
              </NavLink>
            </NavItem>
          </Nav>
          <Button
            color="danger"
            href="https://www.reddit.com/r/Eyebleach/"
            target="_blank"
          >
            View on Reddit
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

NavbarToggler.propTypes = {
  type: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

export default Navigation;
