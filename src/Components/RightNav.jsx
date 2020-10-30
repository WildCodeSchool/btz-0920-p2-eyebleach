import styled from 'styled-components';
import PropTypes from 'prop-types';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Photos</li>
      <li>Vidéos</li>
      <li>Tops</li>
      <li>ViewOnReddit</li>
    </Ul>
  );
};

RightNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default RightNav;
