import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollUpButton from 'react-scroll-up-button';

import Home from '../Pages/Home';
import ImagesPage from '../Pages/ImagesPage';
import VideosPage from '../Pages/VideosPage';
import TopPage from '../Pages/TopPage';
import postPageMobile from '../Pages/postPageMobile';
import Navigation from './Navigation';
import Footer from './Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Photos" component={ImagesPage} />
        <Route path="/Videos" component={VideosPage} />
        <Route path="/Tops" component={TopPage} />
        <Route path="/Post/:id/:title" component={postPageMobile} />
      </Switch>
      <ScrollUpButton />
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
