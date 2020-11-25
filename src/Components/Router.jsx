import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import Home from '../Pages/Home';
import ImagesPage from '../Pages/ImagesPage';
import VideosPage from '../Pages/VideosPage';
import TopPage from '../Pages/TopPage';
import postPageMobile from '../Pages/postPageMobile';
import Navigation from './Navigation';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Photos" component={ImagesPage} />
        <Route path="/Vidéos" component={VideosPage} />
        <Route path="/Tops" component={TopPage} />
        <Route path="/Post/:id/:title" component={postPageMobile} />
      </Switch>
      <ScrollUpButton />
    </BrowserRouter>
  );
};

export default Router;
