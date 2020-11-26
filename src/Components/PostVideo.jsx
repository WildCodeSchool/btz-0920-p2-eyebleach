import { useHistory } from 'react-router-dom';
import { Card, CardText, CardImgOverlay } from 'reactstrap';
import { VscAccount } from 'react-icons/vsc';
import { BiShareAlt } from 'react-icons/bi';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LikeButtonhp from './LikeButtonhp';

const PostVideo = ({ id, slugTitle, author, preview }) => {
  const [isVideo, setIsVideo] = useState(false);
  useEffect(() => {
    if (preview)
      setIsVideo(
        preview.split('.').pop() === 'mp4' || preview.split('.').pop() === 'gif'
      );
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
        </CardText>
      </CardImgOverlay>
    </Card>
  );
};

PostVideo.defaultProps = {
  author: ' ',
  id: ' ',
  slugTitle: ' ',
  preview: ' ',
};

PostVideo.propTypes = {
  author: PropTypes.string,
  id: PropTypes.string,
  slugTitle: PropTypes.string,
  preview: PropTypes.string,
};

export default PostVideo;
