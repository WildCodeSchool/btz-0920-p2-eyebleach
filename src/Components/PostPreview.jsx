import {
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import PropTypes from 'prop-types';

const PostPreview = ({
  title,
  url_overridden_by_dest,
  author_fullname,
  id,
}) => {
  const isImage = url_overridden_by_dest.split('.').pop() === `jpg`;
  return (
    <Col xs="12" md="6" className="py-1">
      <Card inverse>
        <p>{id}</p>
        {isImage ? (
          <CardImg width="100%" src={url_overridden_by_dest} alt={title} />
        ) : (
          <iframe title={title} src={url_overridden_by_dest} />
        )}
        )
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
  url_overridden_by_dest: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default PostPreview;
