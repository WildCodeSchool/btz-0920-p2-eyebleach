/* eslint-disable no-console */
import Axios from 'axios';
import { useEffect, useState } from 'react';
import PostPageMobilePhoto from '../Components/PostPageMobilePhoto';

const postPageMobile = (props) => {
  // eslint-disable-next-line prefer-destructuring
  const id = props.match.params.id;
  // eslint-disable-next-line prefer-destructuring
  const title = props.match.params.title;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(`https://www.reddit.com/r/Eyebleach/comments/${id}/${title}.json`)
      .then((res) => {
        console.log(posts, 'this is not posts');
        setPosts(res.data.data.children);
      })
      .then(console.log(posts, 'this is posts'));
  }, []);
  return (
    <div>
      <PostPageMobilePhoto /* imageToDisplay={posts[0].url_overridden_by_dest} */
      />
    </div>
  );
};

export default postPageMobile;
