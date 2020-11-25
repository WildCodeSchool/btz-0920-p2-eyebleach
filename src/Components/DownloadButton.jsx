import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { BsCloudDownload } from 'react-icons/bs';

// eslint-disable-next-line no-unused-vars
function DownloadButton({ contentToDL }) {
  return (
    <a href={contentToDL} download>
      <Button color="link" style={{ color: 'black' }}>
        <BsCloudDownload size={25} />
      </Button>
    </a>
  );
}

DownloadButton.propTypes = {
  contentToDL: PropTypes.string.isRequired,
};

export default DownloadButton;
