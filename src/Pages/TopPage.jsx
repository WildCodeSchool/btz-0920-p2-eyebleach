import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container, CardColumns, Col } from 'reactstrap';

import Loader from '../Components/Loader';

import './Home.css';
import PostTop from '../Components/PostTop';
import Footer from '../Components/Footer';

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
      <Col xs={12} className="pt-5 pb-2">
        <h1 className="text-left">Top Searches</h1>
      </Col>
      <Col xs={12} className="pt-1 pb-3">
        <p className="text-left">The most popular posts on Eyebleach.</p>
      </Col>
      <Row className="d-flex justify-content-center">
        <CardColumns className="cardscolumslayout px-3">
          {loading && <Loader />}

          {posts &&
            posts
              .filter((post) => post.data.total_awards_received >= 5)
              .sort((a, b) => {
                return (
                  b.data.total_awards_received - a.data.total_awards_received
                );
              })
              .map((post) => {
                return (
                  <PostTop
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    url_overridden_by_dest={post.data.url_overridden_by_dest}
                    author={post.data.author}
                    key={post.data.id}
                    award={post.data.total_awards_received}
                    preview={
                      // post.data.preview &&
                      // post.data.preview.reddit_video_preview &&
                      post.data.preview?.reddit_video_preview?.fallback_url
                    }
                  />
                );
              })
              .slice(1, 50)}
        </CardColumns>
      </Row>
      {!loading && <Footer />}
    </Container>
  );
};

export default Home;
