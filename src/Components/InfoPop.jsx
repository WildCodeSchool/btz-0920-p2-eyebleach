import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverBody } from 'reactstrap';
import logoReddit from '../logoReddit.png';

function InfoPop({ redditPostURL, comments }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <div className="w-100 d-flex justify-content-between">
      <Button color="dark" id="Popover1" type="button">
        +
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody>{comments} comments on this post</PopoverBody>
      </Popover>
      <a
        href={`https://www.reddit.com${redditPostURL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={logoReddit}
          alt="reddit logo to go to the post"
          style={{ width: '50px' }}
        />
      </a>
    </div>
  );
}

InfoPop.propTypes = {
  redditPostURL: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
};

export default InfoPop;
