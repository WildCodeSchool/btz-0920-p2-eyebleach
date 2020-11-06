import { Col, Card, CardTitle, CardText, CardImgOverlay } from 'reactstrap';

import PropTypes from 'prop-types';

const PostPreview = ({ title, url, author_fullname }) => {
  // const isImage = url_overridden_by_dest.split('.').pop() === `jpg`;
  return (
    <Col xs="12" md="6" className="py-1">
      <Card inverse>
        <iframe title={title} src={url} />)
        <CardImgOverlay>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>
            <small className="text-muted">{author_fullname}</small>
          </CardText>
        </CardImgOverlay>
      </Card>
    </Col>
  );
};

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
};

export default PostPreview;
