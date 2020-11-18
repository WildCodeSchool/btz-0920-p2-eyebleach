import { useHistory } from 'react-router-dom';
import { Card, CardText, CardImgOverlay, CardImg } from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import { BsHeart } from 'react-icons/bs';
import { BiShareAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';

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
      className="d-flex justify-content-center"
      onClick={goToPage}
      style={{
        cursor: 'pointer',
      }}
    >
      <CardImg top width="100%" src={url_overridden_by_dest} alt={title} />
      <CardImgOverlay className="hideinfos">
        <CardText className="w-100 d-flex justify-content-between">
          <div>
            <VscAccount className="mr-2" size={20} />
            {author}
          </div>
          <div>
            <BsHeart className="mr-2" size={20} />
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
