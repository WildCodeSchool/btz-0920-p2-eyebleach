/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';
import InfoPop from './InfoPop';

function PostPageMobilePhoto({
  imageToDisplay,
  altForImgToDisplay,
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
      <Card>
        <div className="w-100 d-flex justify-content-between">
          <LikeButton />
          <DownloadButton contentToDL={imageToDisplay} />
        </div>
        <CardImg src={imageToDisplay} alt={altForImgToDisplay} />
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
    </Col>
  );
}

/* PostPageMobilePhoto.defaultProps = {
  imageToDisplay:
    'https://pbs.twimg.com/profile_images/636823510539702272/kL6h_Jhj.jpg',
  altForImgToDisplay: 'petit chien noir qui regarde à droite',
  userName: 'DefaultUserName',
  title: 'This is not the title from reddit',
  redditPostURL: 'https://fr.wikipedia.org/wiki/Erreur_HTTP_404',
}; */

PostPageMobilePhoto.propTypes = {
  imageToDisplay: PropTypes.string.isRequired,
  altForImgToDisplay: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  redditPostURL: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  totalAwards: PropTypes.number.isRequired,
};

export default PostPageMobilePhoto;
