import { compose } from 'recompose';
import { connect } from 'react-redux';

// others
import { TInnerProps } from './Message';

// store
import { removeNotification } from '../../../../store/notifications/actions';

const mapDispatchToProps = {
  removeNotification,
};

export const enhanceNotifications = compose<TInnerProps, null>(
  connect(null, mapDispatchToProps)
);
