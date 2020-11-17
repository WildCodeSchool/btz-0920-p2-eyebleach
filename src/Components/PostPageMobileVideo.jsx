/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import DownloadButton from './DownloadButton';
import InfoPop from './InfoPop';

function PostPageMobileVideo({
  videoToDisplay,
  userName,
  title,
  redditPostURL,
  comments,
}) {
  return (
    <div className="mainPostPageMobile">
      <div className="userNamePostMob">
        <p>{userName}</p>
        <LikeButton />
        <DownloadButton contentToDL={videoToDisplay} />
      </div>

      <div className="videoDiv">
        <video controls autoPlay="true" loop width="100%" src={videoToDisplay}>
          <track default kind="captions" />
        </video>
      </div>
      <div className="titleDesc">{title}</div>
      <div className="socialIcons">
        <InfoPop comments={comments} redditPostURL={redditPostURL} />
      </div>
    </div>
  );
}

PostPageMobileVideo.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  videoToDisplay: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
};

export default PostPageMobileVideo;
