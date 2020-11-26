import { useHistory } from 'react-router-dom';
import { Card, CardText, CardImgOverlay, CardImg } from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import { BiShareAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import LikeButtonhp from './LikeButtonhp';

import './PostImage.css';

const PostImage = ({
  title,
  url_overridden_by_dest,
  author,
  slugTitle,
  id,
}) => {
  const history = useHistory();

  const goToPage = () => {
    history.push(`/Post/${id}/${slugTitle}`);
  };

  return (
    <Card
      inverse
      onClick={goToPage}
      style={{
        cursor: 'pointer',
      }}
    >
      <CardImg top width="100%" src={url_overridden_by_dest} alt={title} />
      <CardImgOverlay className="hideinfos">
        <CardText
          tag="div"
          className="w-100 d-flex justify-content-between align-items-baseline"
        >
          <div>
            <VscAccount className="mr-2" size={20} />
            {author}
          </div>
          <div>
            <LikeButtonhp className="mr-2" size={20} />
            <BiShareAlt size={20} />
          </div>
        </CardText>
      </CardImgOverlay>
    </Card>
  );
};

PostImage.propTypes = {
  title: PropTypes.string.isRequired,
  url_overridden_by_dest: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
};

export default PostImage;
