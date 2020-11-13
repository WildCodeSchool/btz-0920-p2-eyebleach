import { useHistory } from 'react-router-dom';
import {
  Card,
  Col,
  CardTitle,
  CardText,
  CardImgOverlay,
  CardImg,
} from 'reactstrap';

import PropTypes from 'prop-types';

import './PostImage.css';

const PostImage = ({
  title,
  url_overridden_by_dest,
  author_fullname,
  slugTitle,
  id,
}) => {
  const history = useHistory();

  const goToPage = () => {
    history.push(`/Post/${id}/${slugTitle}`);
  };

  return (
    <Col xs="12" md="6" lg="4" className="py-1">
      <Card
        inverse
        className="d-flex justify-content-center"
        onClick={goToPage}
        style={{
          cursor: 'pointer',
          textcolor: 'red',
        }}
      >
        <CardImg
          controls
          width="100%"
          src={url_overridden_by_dest}
          alt={title}
        />
        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
          <CardText>
            <small className="text-muted">{author_fullname}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

PostImage.propTypes = {
  title: PropTypes.string.isRequired,
  url_overridden_by_dest: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
};

export default PostImage;
