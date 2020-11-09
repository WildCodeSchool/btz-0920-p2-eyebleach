import { useHistory } from 'react-router-dom';
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import './PostPreview.css';

const PostPreview = ({
  id,
  slugTitle,
  title,
  url_overridden_by_dest,
  author_fullname,
  preview,
}) => {
  const [isVideo, setIsVideo] = useState(false);
  useEffect(() => {
    if (preview) setIsVideo(preview.split('.').pop() === 'mp4');
  }, [preview]);
  const history = useHistory();

  const goToPage = () => {
    history.push(`/Post/${id}/${slugTitle}`);
  };

  return (
    <Row>
      <Col className="py-1">
        <Card
          inverse
          className="d-flex justify-content-center"
          onClick={goToPage}
          style={{
            cursor: 'pointer',
          }}
        >
          {isVideo && (
            <video controls width="100%" src={preview}>
              <track default kind="captions" />
            </video>
          )}
          {!isVideo && (
            <CardImg width="100%" src={url_overridden_by_dest} alt={title} />
          )}

          <CardImgOverlay>
            <CardTitle>{title}</CardTitle>
            <CardText>
              <small className="text-muted">{author_fullname}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </Col>
    </Row>
  );
};

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url_overridden_by_dest: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
  preview: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PostPreview;
