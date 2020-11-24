/* eslint-disable no-console */
import Axios from 'axios';
import { useEffect, useState } from 'react';
/* import { Container, Row } from 'reactstrap';
 */
import Loader from '../Components/Loader';
import PostPageMobilePhoto from '../Components/PostPageMobilePhoto';
import PostPageMobileVideo from '../Components/PostPageMobileVideo';

const postPageMobile = (props) => {
  const { title, id } = props.match.params;
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [video, setVideo] = useState(false);

  useEffect(() => {
    Axios.get(
      `https://www.reddit.com/r/Eyebleach/comments/${id}/${title}.json`
    ).then((res) => {
      setPosts(res.data[0].data.children[0].data);
      if (res.data[0].data.children[0].data.preview.reddit_video_preview) {
        setVideo(true);
      }
      setLoading(false);
    });
  }, []);
  console.log(posts, 'this is outside use effect');

  return (
    <div className="mainPost py-4">
      {loading && <Loader />}

      {posts &&
        (video ? (
          <PostPageMobileVideo
            title={posts.title}
            videoToDisplay={posts.preview.reddit_video_preview.fallback_url}
            userName={posts.author}
            redditPostURL={posts.permalink}
            comments={posts.num_comments}
            totalAwards={posts.total_awards_received}
          />
        ) : (
          <PostPageMobilePhoto
            title={posts.title}
            imageToDisplay={posts.url_overridden_by_dest}
            altForImgToDisplay={posts.title}
            userName={posts.author}
            redditPostURL={posts.permalink}
            comments={posts.num_comments}
            totalAwards={posts.total_awards_received}
            contentToDL={posts.url_overridden_by_dest}
          />
        ))}
    </div>
  );
};

export default postPageMobile;
