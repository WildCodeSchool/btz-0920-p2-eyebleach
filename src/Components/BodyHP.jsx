import axios from 'axios';
import { Component } from 'react';

const apiUrl = 'https://www.reddit.com/r/Eyebleach.json';
class BodyHP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.getReddit = this.getReddit.bind(this);
  }

  componentDidMount() {
    this.getReddit();
  }

  getReddit() {
    axios.get(`${apiUrl}`).then((res) => {
      const posts = res.data.data.children.map((obj) => obj.data);
      this.setState({ posts });
    });
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        {posts.map((post) => (
          <figure className="DisplayPost">
            <img
              className="ImagePost"
              src={post.url_overridden_by_dest}
              alt={post.title}
            />

            <figcaption>
              <h2 className="TitleStyle">{post.title}</h2>
              <p className="AuthorStyle">{post.author_fullname}</p>
            </figcaption>
          </figure>
        ))}
        ;
      </div>
    );
  }
}

export default BodyHP;

// <iframe
// title={post.title}
// src={post.preview.reddit_video_preview.fallback_url}
// />
