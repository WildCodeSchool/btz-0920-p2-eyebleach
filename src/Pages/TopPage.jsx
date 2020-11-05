import { Row, Container } from 'reactstrap';
import Navigation from '../Components/Navigation';

const TopPage = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          <p>UPVOTE !!!</p>
        </Row>
      </Container>
    </div>
  );
};

export default TopPage;
