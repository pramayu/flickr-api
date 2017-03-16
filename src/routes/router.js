import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../components/app';
import RandomPage from '../components/home/random-page';
import SinglePage from '../components/single/single-page';
import CollectionPage from '../components/collection/collection-page';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={RandomPage} />
      <Route path="photo/:id" component={SinglePage} />
      <Route path="collections/:id/:slug" component={CollectionPage} />
    </Route>
)
