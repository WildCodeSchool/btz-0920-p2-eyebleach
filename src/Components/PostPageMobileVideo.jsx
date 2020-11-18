/* eslint-disable no-unused-vars */
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
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
}) {
  return (
    <Col
      xs={{ size: 12 }}
      md={{ size: 6 }}
      lg={{ size: 6 }}
      xl={{ size: 4 }}
      className="container-fluid"
    >
      <Card>
        <div className="w-100 d-flex justify-content-between">
          <LikeButton />
          <DownloadButton />
        </div>
        <video controls autoPlay="true" loop width="100%" src={videoToDisplay}>
          <track default kind="captions" />
        </video>

        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            u/{userName}
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card content.
          </CardText>

          <InfoPop comments={comments} redditPostURL={redditPostURL} />
        </CardBody>
      </Card>
    </Col>
  );
}

PostPageMobileVideo.propTypes = {
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  videoToDisplay: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
};

export default PostPageMobileVideo;
