import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './App';

// store
import { isReadySelector } from '../../store/appInitializer/selectors';

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  isReady: isReadySelector,
});

export const enhanceApp = compose<TInnerProps, null>(
  connect(mapStateToProps, null)
);
