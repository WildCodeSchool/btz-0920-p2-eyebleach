import { useState } from 'react';
import { Button } from 'reactstrap';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function LikeButtonhp() {
  const [liked, setLiked] = useState(false);
  return (
    <Button
      outline
      color="link"
      onClick={() => setLiked(!liked)}
      style={{ color: 'white' }}
    >
      {liked ? (
        <BsHeartFill size={20} style={{ fill: 'white' }} />
      ) : (
        <BsHeart size={20} />
      )}
    </Button>
  );
}

export default LikeButtonhp;
