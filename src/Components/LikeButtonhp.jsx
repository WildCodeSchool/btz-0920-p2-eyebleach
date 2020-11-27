import { useState } from 'react';
import { Button } from 'reactstrap';
import { BsHeartFill, BsHeart } from 'react-icons/bs';

import '../Pages/Home.css';

function LikeButtonhp() {
  const [liked, setLiked] = useState(false);
  return (
    <Button
      outline
      color="link"
      className="likebutton"
      onClick={(e) => {
        e.stopPropagation();
        setLiked(!liked);
      }}
      style={{ color: 'white' }}
    >
      {liked ? <BsHeartFill size={20} /> : <BsHeart size={20} />}
    </Button>
  );
}

export default LikeButtonhp;
