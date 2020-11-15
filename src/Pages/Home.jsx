import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container, CardColumns } from 'reactstrap';

import PostPreview from '../Components/PostPreview';
import TextWelcome from '../Components/TextWelcome';
import Loader from '../Components/Loader';

import './Home.css';
import cuteKitten from '../Images/cuteKitten.png';

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
      <div
        className="text-responsive cuteKitten"
        style={{ backgroundImage: `url(${cuteKitten}` }}
      >
        <TextWelcome />
      </div>
      <Row className="d-flex justify-content-center px-2-sm">
        <CardColumns className="cardscolumslayout">
          {loading && <Loader />}

          {posts &&
            posts
              .map((post) => {
                // console.log(post.data.permalink.split('/'));
                return (
                  <PostPreview
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    url_overridden_by_dest={post.data.url_overridden_by_dest}
                    author={post.data.author}
                    key={post.data.id}
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
    </Container>
  );
};

export default Home;
