import { Col, Spinner } from 'reactstrap';

const Loader = () => {
  return (
    <Col className="text-center">
      <Spinner size="xl" color="danger" />
    </Col>
  );
};

export default Loader;
