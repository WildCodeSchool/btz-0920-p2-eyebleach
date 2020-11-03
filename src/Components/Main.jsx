import axios from 'axios';
import { Component } from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = 'https://www.reddit.com/r/Eyebleach.json';

class Main extends Component {
  constructor() {
    super();
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
        <Card inverse className="DisplayPost">
          {posts.map((post) => (
            <div>
              <CardImg
                className="ImagePost"
                width="100%"
                src={post.url_overridden_by_dest}
                alt={post.title}
              />
              <CardImgOverlay>
                <CardTitle>{post.title}</CardTitle>
                <CardText>{post.author_fullname}</CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </div>
          ))}
          ;
        </Card>
      </div>
    );
  }
}

export default Main;
