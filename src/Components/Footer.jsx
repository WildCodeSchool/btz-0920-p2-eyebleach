import { Badge } from 'reactstrap';
import Axios from 'axios';

import { useEffect, useState } from 'react';

import './Footer.css';

function Footer() {
  const [selected, setSelected] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('https://www.reddit.com/r/Eyebleach.json').then((res) => {
      setPosts(res.data.data.children);
    });
  }, []);

  const UpVotedPost = () => {
    setPosts(posts.filter((post) => post.data.total_awards_received));
  };

  // eslint-disable-next-line no-console
  console.log(UpVotedPost);

  return (
    <section className="footer">
      <hr />
      <div className="d-flex justify-content-around">
        <section>
          <a href="/Photos">
            <Badge
              onClick={() => setSelected(!selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Most Commented
            </Badge>
          </a>
        </section>
        <section>
          <a href="/Vidéos">
            <Badge
              onClick={() => setSelected(!selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Most Upvoted
            </Badge>
          </a>
        </section>
        <section>
          <a href="/Tops">
            <Badge
              onClick={() => setSelected(!selected)}
              pill
              color="dark"
              className="opacity-4 m-1 p-2"
            >
              Most Awarded
            </Badge>
          </a>
        </section>
      </div>
      <hr />
    </section>
  );
}

export default Footer;
