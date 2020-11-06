import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

function DownloadButton({ imageToDisplay }) {
  return (
    <Button color="link" onClick={imageToDisplay}>
      {/* do a function to download the img when the button is clicked */}
      <svg
        width="1.5em" /* this is the download icon  */
        height="1.5em"
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
      </svg>{' '}
    </Button>
  );
}

DownloadButton.defaultProps = {
  imageToDisplay:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
};

DownloadButton.propTypes = {
  imageToDisplay: PropTypes.string,
};

export default DownloadButton;
