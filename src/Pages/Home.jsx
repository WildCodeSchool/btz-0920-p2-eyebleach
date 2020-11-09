import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container, Col } from 'reactstrap';

import PostPreview from '../Components/PostPreview';
import TextWelcome from '../Components/TextWelcome';
import Loader from '../Components/Loader';

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
    <div>
      <Container>
        <Row>
          <TextWelcome />
        </Row>
        {loading && <Loader />}

        {posts &&
          posts.map((post) => {
            // console.log(post.data.permalink.split('/'));
            return (
              <Row>
                <Col md="10" lg="3" className="py-1">
                  <PostPreview
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    url_overridden_by_dest={post.data.url_overridden_by_dest}
                    author_fullname={post.data.author_fullname}
                    key={post.data.id}
                  />
                </Col>
              </Row>
            );
          })}
      </Container>
    </div>
  );
};

export default Home;
