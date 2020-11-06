import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container } from 'reactstrap';

import PostPreview from '../Components/PostPreview';
import Loader from '../Components/Loader';

const ImagesPage = () => {
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
        {loading && <Loader />}
        {posts &&
          posts.map((post) => {
            return (
              <PostPreview
                title={post.data.title}
                url_overridden_by_dest={post.data.url_overridden_by_dest}
                author_fullname={post.data.author_fullname}
                key={post.data.id}
              />
            );
          })}
      </Row>
    </Container>
  );
};

export default ImagesPage;
