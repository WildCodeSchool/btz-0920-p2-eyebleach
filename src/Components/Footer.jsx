import { Button, CardColumns } from 'reactstrap';
import Axios from 'axios';

import { useEffect, useState } from 'react';

import './Footer.css';
import PostPreview from './PostPreview';

function Footer() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/Eyebleach.json').then((res) => {
      setPosts(res.data.data.children);
    });
  }, []);

  return (
    <section className="footer">
      <hr />
      <div className="d-flex justify-content-around">
        <section>
          <CardColumns>
            {(filter
              ? posts.filter((post) => post.data.num_comments >= 20)
              : posts
            )
              .filter((post) => post.data.is_gallery !== true)
              .map((post) => {
                return (
                  <PostPreview
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
          <Button
            onClick={() => setFilter(!filter)}
            pill
            color="dark"
            className="opacity-4 m-1 p-2"
          >
            Most Commented
          </Button>
        </section>
      </div>
      <hr />
    </section>
  );
}

export default Footer;
