import PropTypes from 'prop-types';
/* import { TwitterIcon } from 'react-share'; */

function PostPageMobilePhoto({
  imageToDisplay,
  altForImgToDisplay,
  userName,
  title,
}) {
  return (
    <div className="mainPostPage">
      <p>{userName}</p>
      <button type="button">
        <svg
          width="1em" /* this is the heart icon not fill, add later the ternary to change the state when clicked */
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-heart"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
          />
        </svg>
      </button>
      <a href={imageToDisplay} download={title}>
        <svg
          width="1em" /* this is the download icon  */
          height="1em"
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
      {/* <TwitterIcon size={32} round /> */}
    </div>
  );
}

PostPageMobilePhoto.defaultProps = {
  imageToDisplay:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
  altForImgToDisplay: 'petit chien noir qui regarde à droite',
  userName: 'DefaultUserName',
  title: 'This is not a title from reddit',
};

PostPageMobilePhoto.propTypes = {
  imageToDisplay: PropTypes.string,
  altForImgToDisplay: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
};

export default PostPageMobilePhoto;
