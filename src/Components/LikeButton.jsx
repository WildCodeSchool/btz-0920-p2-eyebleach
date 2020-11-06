import { useState } from 'react';
import { Button } from 'reactstrap';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  return (
    <Button color="link" onClick={() => setLiked(!liked)}>
      {liked ? <BsHeartFill size={30} /> : <BsHeart size={30} />}
    </Button>
  );
}

export default LikeButton;
