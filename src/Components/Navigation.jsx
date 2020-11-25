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
import cuteKitten from '../Images/cuteKitten.png';
import './Navigation.css';

const Navigation = () => {
  const [navLinks] = useState([
    {
      label: 'Photos',
      link: '/Photos',
    },
    {
      label: 'Vidéos',
      link: '/Vidéos',
    },
    {
      label: 'Tops',
      link: '/Tops',
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="light"
      light
      expand="sm"
      className="cuteKitten"
      style={{ backgroundImage: `url(${cuteKitten}` }}
    >
      <NavbarBrand className="navbar-left" href="/">
        <img src={logoEyebleach} alt="logo" height="70" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navLinks.map((item) => {
            return (
              <NavItem key={item.link}>
                <NavLink
                  className="text-dark font-weight-bold"
                  tag={RNV}
                  to={item.link}
                >
                  {item.label}
                </NavLink>
              </NavItem>
            );
          })}
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
