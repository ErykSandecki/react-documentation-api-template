import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps, TProps } from './ModalEndpointFinder';
import { getDataSelector } from '../../store/groupedEndpoints/selectors';

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  data: getDataSelector,
});

export const enhanceModalEndpointFinder = compose<TInnerProps, TProps>(
  connect(mapStateToProps, null)
);
