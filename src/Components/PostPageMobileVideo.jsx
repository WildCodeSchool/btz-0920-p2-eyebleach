/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import DownloadButton from './DownloadButton';
import InfoPop from './InfoPop';

function PostPageMobileVideo({
  videoToDisplay,
  altForImgToDisplay,
  userName,
  title,
  redditPostURL,
}) {
  return (
    <div className="mainPostPage">
      <div className="userNamePostMob">
        <p>{userName}</p>
        <LikeButton />
        <DownloadButton imageToDisplay={videoToDisplay} />
      </div>

      <div className="photoOrVideo">
        <video autoPlay="true" loop width="100%" src={videoToDisplay}>
          <track default kind="captions" />
        </video>
      </div>
      <div className="titleDesc">{title}</div>
      <div className="socialIcons">
        <InfoPop redditPostURL={redditPostURL} />
      </div>
    </div>
  );
}

PostPageMobileVideo.propTypes = {
  altForImgToDisplay: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  videoToDisplay: PropTypes.string.isRequired,
};

export default PostPageMobileVideo;
