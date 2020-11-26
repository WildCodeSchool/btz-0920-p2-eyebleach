import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container, CardColumns, Button } from 'reactstrap';

import PostPreview from '../Components/PostPreview';
import TextWelcome from '../Components/TextWelcome';
import Loader from '../Components/Loader';

import './Home.css';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [onlyMostCommentedPost, setOnlyMostCommentedPost] = useState(false);
  const [onlyMostUpvotedPost, setOnlyMostUpvotedPost] = useState(false);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/Eyebleach.json').then((res) => {
      setPosts(res.data.data.children);
      setLoading(false);
    });
  }, []);

  return (
    <Container>
      <Row>
        <TextWelcome className="text-responsive" />
      </Row>
      <Row className="d-flex justify-content-center">
        <CardColumns className="cardscolumslayout px-3">
          {loading && <Loader />}

          {posts &&
            posts
              .filter((post) =>
                onlyMostCommentedPost ? post.data.num_comments >= 20 : true
              )
              .filter((post) =>
                onlyMostUpvotedPost ? post.data.ups >= 100 : true
              )
              .filter((post) => post.data.is_gallery !== true)
              .map((post) => {
                return (
                  <PostPreview
                    id={post.data.permalink.split('/')[4]}
                    slugTitle={post.data.permalink.split('/')[5]}
                    title={post.data.title}
                    url_overridden_by_dest={post.data.url_overridden_by_dest}
                    author={post.data.author}
                    key={post.data.id}
                    is_gallery={post.data.is_gallery}
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
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button onClick={() => setOnlyMostCommentedPost((prev) => !prev)}>
          {!onlyMostCommentedPost ? 'Most commented' : 'All Post'}
        </Button>
        <Button onClick={() => setOnlyMostUpvotedPost((prev) => !prev)}>
          {!onlyMostUpvotedPost ? 'Most upvoted' : 'All Post'}
        </Button>
      </div>
    </Container>
  );
};

export default Home;
