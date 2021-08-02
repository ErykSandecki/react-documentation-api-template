// @ts-nocheck
import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

// components
import Firebase from '../Firebase/Firebase';
import Main from '../Main/Main';
import Notifications from '../Feedback/Notifications/Notifications';
import Page from '../Page/Page';
import { enhanceApp } from './enhanceApp';

// store
import { history } from '../../store/configureStore';

export type TInnerProps = {
  isReady: boolean;
};

const App: FunctionComponent<TInnerProps> = ({ isReady }) => {
  return (
    <>
      <Firebase />
      <Notifications />
      <Page loadedData={isReady}>
        <BrowserRouter>
          <Main />
          <ConnectedRouter history={history}></ConnectedRouter>
        </BrowserRouter>
      </Page>
    </>
  );
};

export default enhanceApp(App);
