import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    color: black;
  }

  @media (max-width: 768px) {
    display: none;
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

const RightNav = () => {
  return (
    <Ul>
      <li>Photos</li>
      <li>Vidéos</li>
      <li>Tops</li>
      <li>ViewOnReddit</li>
    </Ul>
  );
};

export default RightNav;
