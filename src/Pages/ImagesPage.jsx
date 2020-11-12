import { useHistory } from 'react-router-dom';
import {
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const ImagesPage = ({ title, url_overridden_by_dest, author }) => {
  const [isImage, setIsImage] = useState([]);

  useEffect(() => {
    setIsImage(
      url_overridden_by_dest.split('.').pop() === 'png' ||
        url_overridden_by_dest.split('.').pop() === 'jpg'
    );
  }, [url_overridden_by_dest]);

  const history = useHistory();

  const goToPage = () => {
    history.push(`/Photos`);
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
        {isImage && (
          <CardImg
            controls
            width="100%"
            src={url_overridden_by_dest}
            alt={title}
          />
        )}
        <CardImgOverlay>
          <CardTitle>{title}</CardTitle>
          <CardText>
            <small className="text-muted">{author}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

ImagesPage.propTypes = {
  title: PropTypes.string.isRequired,
  url_overridden_by_dest: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default ImagesPage;
