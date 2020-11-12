import { useHistory } from 'react-router-dom';
import { Card, Col, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const PostVideo = ({
  id,
  slugTitle,
  title,
  // url_overridden_by_dest,
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
    <Col xs="12" md="6" lg="4" className="py-1">
      <Card
        inverse
        className="d-flex justify-content-center"
        onClick={goToPage}
        style={{
          cursor: 'pointer',
        }}
      >
        {isVideo && (
          <video autoPlay="true" loop width="100%" src={preview}>
            <track default kind="captions" />
          </video>
        )}

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

PostVideo.propTypes = {
  title: PropTypes.string.isRequired,
  // url_overridden_by_dest: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
  preview: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PostVideo;

/* {!isVideo && (
    <CardImg width="100%" src={url_overridden_by_dest} alt={title} />
  )} */
