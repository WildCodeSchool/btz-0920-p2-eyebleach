import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Popover, PopoverBody } from 'reactstrap';

function InfoPop({ redditPostURL }) {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <Button color="info" id="Popover1" type="button">
        Infos
      </Button>
      <Popover
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverBody>Here goes the numbers of comments and upvotes</PopoverBody>
      </Popover>
      <a href={redditPostURL} target="_blank" rel="noopener noreferrer">
        <img
          src="https://image.flaticon.com/icons/png/512/49/49398.png"
          alt="reddit logo to go to the post"
          style={{ width: '50px' }}
        />
      </a>
    </div>
  );
}

InfoPop.propTypes = {
  redditPostURL: PropTypes.string.isRequired,
};

export default InfoPop;
