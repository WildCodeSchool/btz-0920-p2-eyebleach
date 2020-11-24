import { Badge, Col, Container, Row } from 'reactstrap';

import './Footer.css';

function Footer() {
  return (
    <Container>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} className="main-footer text-center">
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Likes
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Comments
          </Badge>
          <Badge pill color="dark" className="opacity-4 m-1 p-2">
            Tops
          </Badge>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
