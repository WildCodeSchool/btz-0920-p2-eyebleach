import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Col, Row, Spinner, Container } from 'reactstrap';
import PostPreview from './PostPreview';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/Eyebleach.json').then((res) => {
      setPosts(res.data.data.children);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Row>
        {loading ? (
          <Col className="text-center">
            <Spinner size="xl" color="warning" />
          </Col>
        ) : (
          posts.map((post) => {
            return (
              <PostPreview
                title={post.title}
                url_overridden_by_dest={post.url_overridden_by_dest}
                author_fullname={post.author_fullname}
                key={post.id}
              />
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default Home;
