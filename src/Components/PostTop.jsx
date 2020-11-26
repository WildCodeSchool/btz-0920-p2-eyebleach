import { useHistory } from 'react-router-dom';
import { Card, CardText, CardImg, CardImgOverlay } from 'reactstrap';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import { BiShareAlt } from 'react-icons/bi';
import LikeButtonhp from './LikeButtonhp';

import './PostPreview.css';

const PostTop = ({
  id,
  slugTitle,
  title,
  url_overridden_by_dest,
  author,
  preview,
  award,
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
    <Card
      inverse
      onClick={goToPage}
      style={{
        cursor: 'pointer',
      }}
    >
      {isVideo && (
        <video loop width="100%" src={preview} className="mb-sm-n2">
          <track default kind="captions" />
        </video>
      )}
      {!isVideo && (
        <CardImg top width="100%" src={url_overridden_by_dest} alt={title} />
      )}
      <CardImgOverlay className="hideinfos">
        <CardText tag="div" className="w-100 d-flex justify-content-between">
          <div>
            <VscAccount className="mr-2" size={20} />
            {author}
          </div>
          <div>
            <LikeButtonhp className="mr-2" size={20} />
            <BiShareAlt size={20} />
          </div>
          <div>{award}</div>
        </CardText>
      </CardImgOverlay>
    </Card>
  );
};

PostTop.defaultProps = {
  title: ' ',
  url_overridden_by_dest: ' ',
  author: ' ',
  id: ' ',
  slugTitle: ' ',
  preview: ' ',
  award: ' ',
};

PostTop.propTypes = {
  title: PropTypes.string,
  url_overridden_by_dest: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
  slugTitle: PropTypes.string,
  preview: PropTypes.string,
  award: PropTypes.number,
};

export default PostTop;
