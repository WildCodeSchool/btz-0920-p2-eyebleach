import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container, CardColumns, Col } from 'reactstrap';

import Loader from '../Components/Loader';
import PostVideo from '../Components/PostVideo';
import './VideosPage.css';

const VideosPage = () => {
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
      <Col xs={12} className="pt-5 pb-2">
        <h1 className="text-left">All videos</h1>
      </Col>
      <Row className="d-flex justify-content-center">
        <CardColumns className="cardscolumslayoutvideos px-3">
          {loading && <Loader />}

          {posts &&
            posts
              .filter(
                (post) =>
                  post.data.preview?.reddit_video_preview?.fallback_url
                    .split('.')
                    .pop() === `mp4`
              )
              .map((post) => {
                return (
                  <PostVideo
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    author={post.data.author}
                    key={post.data.id}
                    preview={
                      // post.data.preview &&
                      // post.data.preview.reddit_video_preview &&
                      post.data.preview?.reddit_video_preview?.fallback_url
                    }
                  />
                );
              })}
        </CardColumns>
      </Row>
    </Container>
  );
};

export default VideosPage;
