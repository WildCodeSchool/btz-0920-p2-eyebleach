import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid grey;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
    width: 20px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src="/public/images/Logo_eyebleach_website.png" alt="logo" />
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
