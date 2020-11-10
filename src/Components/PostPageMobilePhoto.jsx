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
}) {
  return (
    <div className="mainPostPage">
      <div className="userNamePostMob">
        <p>{userName}</p>
        <LikeButton />
        <DownloadButton imageToDisplay={imageToDisplay} />
      </div>

      <div className="photoOrVideo">
        <img src={imageToDisplay} alt={altForImgToDisplay} />
      </div>

      <div className="titleDesc">{title}</div>
      <div className="socialIcons">
        <InfoPop redditPostURL={redditPostURL} />
      </div>
    </div>
  );
}

PostPageMobilePhoto.defaultProps = {
  imageToDisplay:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
  altForImgToDisplay: 'petit chien noir qui regarde à droite',
  userName: 'DefaultUserName',
  title: 'This is not the title from reddit',
  redditPostURL: 'https://fr.wikipedia.org/wiki/Erreur_HTTP_404',
};

PostPageMobilePhoto.propTypes = {
  imageToDisplay: PropTypes.string,
  altForImgToDisplay: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  redditPostURL: PropTypes.string,
};

export default PostPageMobilePhoto;
