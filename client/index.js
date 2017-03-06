import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import App from './components/App';
import storedValueReducer from './reducers/storedValueReducer';

export const store = createStore(
  storedValueReducer,
  compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render((
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Calculator} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('container'));
