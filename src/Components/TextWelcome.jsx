import { Col } from 'reactstrap';

const TextWelcome = () => {
  return (
    <Col xs={12} className="py-5">
      <h1 className="text-center">
        Hi! Welcome to Eyebleach, the largest online community{' '}
        <mark>dedicated to pet lovers</mark>
      </h1>
    </Col>
  );
};
export default TextWelcome;
