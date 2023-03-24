import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux'
import store from './store'
import {disableReactDevTools} from '@fvilers/disable-react-devtools' 

if (process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

serviceWorker.unregister();
