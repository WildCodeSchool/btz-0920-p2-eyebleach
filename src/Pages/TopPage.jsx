import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Container } from 'reactstrap';

import Loader from '../Components/Loader';
import TextWelcome from '../Components/TextWelcome';
import PostVideo from '../Components/PostVideo';

const TopPage = () => {
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
          {loading && <Loader />}

          {posts &&
            posts.map((post) => {
              return (
                <PostVideo
                  id={post.data.permalink.split('/')[4]}
                  slugTitle={post.data.permalink.split('/')[5]}
                  title={post.data.title}
                  // url_overridden_by_dest={post.data.url_overridden_by_dest}
                  author_fullname={post.data.author}
                  key={post.data.id}
                  preview={
                    // post.data.preview &&
                    // post.data.preview.reddit_video_preview &&
                    post.data.preview?.reddit_video_preview?.fallback_url
                  }
                />
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default TopPage;
