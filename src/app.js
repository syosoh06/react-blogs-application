/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

// Our app
import App from './app/App';
import BlogPost from './app/components/BlogPage';
import BlogsList from './app/components/BlogsList';
import * as blogActions from './app/actions/blogActions/blogActions';

import configureStore from './app/store/configureStore';

const store = configureStore();
store.dispatch(blogActions.fetchBlogs());

render((
  <Provider store={store}>
  <Router history={browserHistory} store={store}>
    <Route path='/' component={App}>
      <IndexRoute component={BlogsList}/>
      <Route path="/blogs/:id" component={BlogPost} />
      <Route path='/blogs' component={BlogsList}/>
      <Redirect from='*' to='/blogs'/>
    </Route>
  </Router>
  </Provider>
), document.getElementById('root'));
