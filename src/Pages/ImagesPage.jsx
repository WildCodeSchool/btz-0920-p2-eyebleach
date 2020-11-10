import { useEffect, useState } from 'react';
import Axios from 'axios';

const ImagesPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/Eyebleach.json').then((res) => {
      setPosts(res.data.data.children);
    });
  }, []);

  return (
    <>
      <div>
        {posts.map((post) => (
          <div>
            <h1 key={post.data.id}>
              <img
                src={post.data.url_overridden_by_dest}
                alt={post.data.title}
              />
            </h1>
            <h1 key={post.data.id}>
              <p>{post.data.title}</p>
            </h1>
            <h1 key={post.data.id}>
              <p>{post.data.author_fullname}</p>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImagesPage;
