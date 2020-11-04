import { Container, Row, Col } from 'reactstrap';

const TextWelcome = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="text-center py-4">
            Hi! Welcome to Eyebleach, the largest online community dedicated to
            pet lovers
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default TextWelcome;
