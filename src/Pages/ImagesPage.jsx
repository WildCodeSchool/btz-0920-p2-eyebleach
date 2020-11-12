import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container } from 'reactstrap';

import Loader from '../Components/Loader';
import PostImage from '../Components/PostImage';

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
    <div>
      <Container>
        <Row>
          {loading && <Loader />}

          {posts &&
            posts
              .filter(
                (post) =>
                  post.data.url_overridden_by_dest?.split('.').pop() ===
                    'png' ||
                  post.data.url_overridden_by_dest?.split('.').pop() === 'jpg'
              )
              .map((post) => {
                return (
                  <PostImage
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    url_overridden_by_dest={post.data.url_overridden_by_dest}
                    author_fullname={post.data.author}
                    key={post.data.id}
                  />
                );
              })}
        </Row>
      </Container>
    </div>
  );
};

export default ImagesPage;
