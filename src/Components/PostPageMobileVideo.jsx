import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
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
  totalAwards,
  loading,
}) {
  return (
    <Col
      xs={{ size: 12 }}
      md={{ size: 6 }}
      lg={{ size: 6 }}
      xl={{ size: 4 }}
      className="container-fluid"
    >
      {!loading && (
        <Card>
          <div className="w-100 d-flex justify-content-between">
            <LikeButton />
            <DownloadButton contentToDL={videoToDisplay} />
          </div>
          <video
            controls
            autoPlay="true"
            playsInline
            loop
            width="100%"
            src={videoToDisplay}
          >
            <track default kind="captions" />
          </video>

          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              <VscAccount className="mr-1" size={16} />
              u/{userName}
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card content.
            </CardText>

            <InfoPop
              comments={comments}
              redditPostURL={redditPostURL}
              totalAwards={totalAwards}
            />
          </CardBody>
        </Card>
      )}
    </Col>
  );
}

PostPageMobileVideo.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  videoToDisplay: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  totalAwards: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default PostPageMobileVideo;
