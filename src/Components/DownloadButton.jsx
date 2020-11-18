import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { BsCloudDownload } from 'react-icons/bs';

// eslint-disable-next-line no-unused-vars
function DownloadButton({ contentToDL }) {
  return (
    <Button color="link" style={{ color: 'black' }}>
      <BsCloudDownload size={25} />
    </Button>
  );
}

DownloadButton.defaultProps = {
  contentToDL:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
};

DownloadButton.propTypes = {
  contentToDL: PropTypes.string,
};

export default DownloadButton;
