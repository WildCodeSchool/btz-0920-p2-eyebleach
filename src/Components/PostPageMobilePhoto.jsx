import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import 'bootstrap/dist/css/bootstrap.css';
import DownloadButton from '../DownloadButton';

function PostPageMobilePhoto({
  imageToDisplay,
  altForImgToDisplay,
  userName,
  title,
  redditPostURL,
}) {
  return (
    <div className="mainPostPage">
      <p>{userName}</p>
      <LikeButton />
      <DownloadButton imageToDisplay />

      <div className="photoOrVideo">
        <img src={imageToDisplay} alt={altForImgToDisplay} />
      </div>

      <div className="titleDesc">{title}</div>
      <div className="socialIcons">
        <a href={redditPostURL} target="_blank" rel="noopener noreferrer">
          <img
            src="https://image.flaticon.com/icons/png/512/49/49398.png"
            alt="reddit logo to go to the post"
            style={{ width: '50px' }}
          />
        </a>
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
