/* eslint-disable no-console */
import Axios from 'axios';
import { useEffect, useState } from 'react';
/* import { Container, Row } from 'reactstrap';
 */
import Loader from '../Components/Loader';
import PostPageMobilePhoto from '../Components/PostPageMobilePhoto';

const postPageMobile = (props) => {
  const { title, id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(
      `https://www.reddit.com/r/Eyebleach/comments/${id}/${title}.json`
    ).then((res) => {
      setPosts(res.data[0].data.children[0]);
      setLoading(false);
    });
  }, []);
  console.log(posts, 'this is outside use effect');

  return (
    <div>
      {loading && <Loader />}

      {posts && (
        <PostPageMobilePhoto
          title={posts.title}
          imageToDisplay={posts.data.url_overridden_by_dest}
          altForImgToDisplay={posts.data.title}
          userName={posts.data.author}
          redditPostURL={posts.data.title}
        />
      )}
    </div>
  );
};

export default postPageMobile;
