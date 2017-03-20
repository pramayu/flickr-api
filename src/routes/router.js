import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/app';
import RandomPage from '../components/home/random-page';
import SinglePage from '../components/single/single-page';
import CollectionPage from '../components/collection/collection-page';
import BrowserPage from '../components/browse/browse-page';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={RandomPage} />
      <Route path="photo/:id" component={SinglePage} />
      <Route path="collections/:id/:slug" component={CollectionPage} />
      <Route path="photos/:term" component={BrowserPage} />
    </Route>
)
