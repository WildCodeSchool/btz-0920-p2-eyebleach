import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
} from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';
import InfoPop from './InfoPop';

function PostPageMobilePhoto({
  imageToDisplay,
  loading,
  userName,
  title,
  redditPostURL,
  comments,
  totalAwards,
}) {
  return (
    <Col
      xs={{ size: 12 }}
      md={{ size: 6 }}
      lg={{ size: 6 }}
      xl={{ size: 4 }}
      className="container-fluid"
    >
      {' '}
      {!loading && (
        <Card>
          <div className="w-100 d-flex justify-content-between">
            <LikeButton />
            <DownloadButton contentToDL={imageToDisplay} />
          </div>
          <CardImg src={imageToDisplay} alt={title} />
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

PostPageMobilePhoto.defaultProps = {
  imageToDisplay: 'https://via.placeholder.com/300',
  userName: 'DefaultUserName',
  title: 'This is not the title from reddit',
  redditPostURL: 'https://fr.wikipedia.org/wiki/Erreur_HTTP_404',
  comments: 69,
  totalAwards: 420,
  loading: true,
};

PostPageMobilePhoto.propTypes = {
  imageToDisplay: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  redditPostURL: PropTypes.string,
  comments: PropTypes.number,
  totalAwards: PropTypes.number,
  loading: PropTypes.bool,
};

export default PostPageMobilePhoto;
