import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home';
import ImagesPage from '../Pages/ImagesPage';
import VideosPage from '../Pages/VideosPage';
import TopPage from '../Pages/TopPage';
import postPageMobile from '../Pages/postPageMobile';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Photos" component={ImagesPage} />
        <Route path="/Vidéos" component={VideosPage} />
        <Route path="/Tops" component={TopPage} />
        <Route path="/Post" component={postPageMobile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
