import { Component } from 'react';

import PostPageMobilePhoto from './PostPageMobilePhoto';

class PostPageMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      test: 'tout va bien',
    };
  }

  render() {
    return (
      <div>
        <header>{/* Ici le composant header de diane */}</header>
        <PostPageMobilePhoto />
      </div>
    );
  }
}

export default PostPageMobile;
