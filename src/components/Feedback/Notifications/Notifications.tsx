// @ts-nocheck
// eslint-disable-next-line
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import map from 'lodash/map';

// components
import Message from './Message/Message';
import { enhanceNotifications } from './enhanceNotifications';

// store
import { TMessageState } from '../../../store/notifications/types';

// styles
import { Notifications as NotificationsStyled } from './NotificationsStyled';

export type TInnerProps = {
  messages: Array<TMessageState>;
};

const Notifications: FunctionComponent<TInnerProps> = ({ messages }) => {
  return ReactDOM.createPortal(
    <NotificationsStyled>
      {map(
        messages,
        ({
          children,
          title,
          notificationType,
          id,
          translate,
          hideAfterTime,
        }) => (
          <Message
            id={id}
            key={id}
            hideAfterTime={hideAfterTime}
            notificationType={notificationType}
            title={title}
            translate={translate}
          >
            {children}
          </Message>
        )
      )}
    </NotificationsStyled>,
    document.getElementById('root')
  );
};

export default enhanceNotifications(Notifications);
