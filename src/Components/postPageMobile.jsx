import { Component } from 'react';

import PostPageMobilePhoto from './PostPageMobilePhoto';

class PostPageMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'tout va bien',
      name: 'Malo',
    };
  }

  render() {
    const { test, name } = this.state;
    return (
      <div>
        <header>{/* Ici le composant header de diane */}</header>
        <h1>
          oui ça fonctionne {name} {test}{' '}
        </h1>
        <PostPageMobilePhoto />
      </div>
    );
  }
}

export default PostPageMobile;
