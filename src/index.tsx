// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

// components
import App from './components/App/App';

// store
import configureStore from './store/configureStore';

// styles
import GlobalStyle from './styles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
