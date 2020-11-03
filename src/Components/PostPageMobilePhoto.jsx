import PropTypes from 'prop-types';
import LikeButton from './LikeButton';
import 'bootstrap/dist/css/bootstrap.css';

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
      <a href={imageToDisplay} download>
        <svg
          width="2em" /* this is the download icon  */
          height="2em"
          viewBox="0 0 16 16"
          className="bi bi-download"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
          />
          <path
            fillRule="evenodd"
            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
          />
        </svg>
      </a>

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
