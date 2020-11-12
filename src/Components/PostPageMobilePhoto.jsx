/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import DownloadButton from './DownloadButton';
import InfoPop from './InfoPop';

function PostPageMobilePhoto({
  imageToDisplay,
  altForImgToDisplay,
  userName,
  title,
  redditPostURL,
  comments,
}) {
  return (
    <div className="mainPostPage">
      <div className="userNamePostMob">
        <p>{userName}</p>
        <LikeButton />
        <DownloadButton contentToDL={imageToDisplay} />
      </div>

      <div className="photoDiv">
        <img src={imageToDisplay} alt={altForImgToDisplay} />
      </div>
      <div className="titleDesc">{title}</div>
      <div className="socialIcons">
        <InfoPop comments={comments} redditPostURL={redditPostURL} />
      </div>
    </div>
  );
}

/* PostPageMobilePhoto.defaultProps = {
  imageToDisplay:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
  altForImgToDisplay: 'petit chien noir qui regarde à droite',
  userName: 'DefaultUserName',
  title: 'This is not the title from reddit',
  redditPostURL: 'https://fr.wikipedia.org/wiki/Erreur_HTTP_404',
}; */

PostPageMobilePhoto.propTypes = {
  imageToDisplay: PropTypes.string.isRequired,
  altForImgToDisplay: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
};

export default PostPageMobilePhoto;
