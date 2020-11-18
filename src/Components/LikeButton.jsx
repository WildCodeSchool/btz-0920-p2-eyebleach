import { useState } from 'react';
import { Button } from 'reactstrap';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <Button
      outline
      color="link"
      onClick={() => setLiked(!liked)}
      style={{ color: 'red' }}
    >
      {liked ? <BsHeartFill size={30} /> : <BsHeart size={30} />}
    </Button>
  );
}

export default LikeButton;
