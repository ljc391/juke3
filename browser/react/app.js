'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import {Router, Route, browserHistory,hashHistory, Link, IndexRedirect, IndexRoute} from 'react-router';
import AlbumsContainer from './containers/AlbumsContainer';
import AlbumContainer from './containers/AlbumContainer';
import ArtistsContainer from'./containers/ArtistsContainer';
import ArtistContainer from'./containers/ArtistContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history = {hashHistory}>
        <Route path="/" component={AppContainer} >
            <IndexRedirect to='/albums' />
            <Route path="albums" >
                <IndexRoute component={AlbumsContainer} />
                <Route path=":albumId"   component={AlbumContainer} />
            </Route>
            <Route path="artists" >
                <IndexRoute component={ArtistsContainer}  />
                <Route path=":artistId" onEnter = {()=>{console.log("here");}} component={ArtistContainer} />
            </Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);