import { Col } from 'reactstrap';
import './TextWelcome.css';

const TextWelcome = () => {
  return (
    <Col xs={12} className="py-5">
      <h1 className="text-center">
        Hi! Welcome to Eyebleach, the largest online community dedicated to pet
        lovers
      </h1>
    </Col>
  );
};

export default TextWelcome;
