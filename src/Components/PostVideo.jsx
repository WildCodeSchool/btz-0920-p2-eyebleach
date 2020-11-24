import { useHistory } from 'react-router-dom';
import { Card, CardText, CardImgOverlay } from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import { BsHeart } from 'react-icons/bs';
import { BiShareAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import './PostVideo.css';

const PostVideo = ({ id, slugTitle, author, preview }) => {
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
        <video autoPlay="true" loop width="100%" src={preview}>
          <track default kind="captions" />
        </video>
      )}
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

PostVideo.propTypes = {
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  slugTitle: PropTypes.string.isRequired,
  preview: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default PostVideo;
