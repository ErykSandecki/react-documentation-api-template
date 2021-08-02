import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './Notifications';

// store
import { messagesSelector } from '../../../store/notifications/selectors';

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  messages: messagesSelector,
});

export const enhanceNotifications = compose<TInnerProps, null>(
  connect(mapStateToProps, null)
);
