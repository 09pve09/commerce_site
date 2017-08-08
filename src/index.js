import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from "redux-promise";

import reducers from './reducers';
import Navbar from './components/navbar';
import RootIndex from './components/root_index';
import AdsIndex from './components/ads_index';
import AdsShow from './components/ads_show';

// import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className='height-max'>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/ads/:advertisement_id" component={AdsShow} />
          <Route path="/ads" component={AdsIndex} />
          <Route path="/" component={RootIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
