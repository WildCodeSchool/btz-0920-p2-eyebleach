import { useHistory } from 'react-router-dom';
import {
  Card,
  CardColumns,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
} from 'reactstrap';

import PropTypes from 'prop-types';

import './PostPreview.css';

const PostPreview = ({
  id,
  slugTitle,
  title,
  url_overridden_by_dest,
  author_fullname,
}) => {
  const history = useHistory();

  const goToPage = () => {
    history.push(`/Post/${id}/${slugTitle}`);
  };

  return (
    <div className="container">
      <CardColumns>
        <Card
          inverse
          className="d-flex justify-content-center"
          onClick={goToPage}
          style={{
            cursor: 'pointer',
          }}
        >
          <CardImg width="100%" src={url_overridden_by_dest} alt={title} />
          <CardImgOverlay>
            <CardTitle>{title}</CardTitle>
            <CardText>
              <small className="text-muted">{author_fullname}</small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </CardColumns>
    </div>
  );
};

PostPreview.propTypes = {
  title: PropTypes.string.isRequired,
  url_overridden_by_dest: PropTypes.string.isRequired,
  author_fullname: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
};

export default PostPreview;
