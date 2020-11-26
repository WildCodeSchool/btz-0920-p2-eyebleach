import { Card, CardBody, CardSubtitle, CardTitle, Col } from 'reactstrap';
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
            autoPlay
            playsInline
            loop
            width="100%"
            src={videoToDisplay}
          >
            <track default kind="captions" />
          </video>

          <CardBody>
            <CardTitle tag="h5">{title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-5 text-muted">
              <VscAccount className="mr-1" size={16} />
              u/{userName}
            </CardSubtitle>

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

PostPageMobileVideo.defaultProps = {
  videoToDisplay: 'https://i.imgur.com/d9LWvcE.mp4',
  userName: 'DefaultUserName',
  title: 'This is not the title from reddit',
  redditPostURL: 'https://fr.wikipedia.org/wiki/Erreur_HTTP_404',
  comments: 69,
  totalAwards: 420,
  loading: true,
};

PostPageMobileVideo.propTypes = {
  userName: PropTypes.string,
  title: PropTypes.string,
  redditPostURL: PropTypes.string,
  videoToDisplay: PropTypes.string,
  comments: PropTypes.number,
  totalAwards: PropTypes.number,
  loading: PropTypes.bool,
};

export default PostPageMobileVideo;
