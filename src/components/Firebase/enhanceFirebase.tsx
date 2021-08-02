import { connect } from 'react-redux';
import { compose } from 'recompose';

// others
import { TConfig } from '../../store/config/types';
import { TGroupedEndpoint } from '../../store/groupedEndpoints/types';
import { TInnerProps } from './Firebase';

// store
import { appInitializerSuccess } from '../../store/appInitializer/actions';
import { configSuccess } from '../../store/config/actions';
import { groupedEndpointsSuccess } from '../../store/groupedEndpoints/actions';

const mapDispatchToProps = {
  appInitializerSuccess: appInitializerSuccess,
  configSuccess: (payload: TConfig) => configSuccess(payload),
  groupedEndpointsSuccess: (payload: Array<TGroupedEndpoint>) =>
    groupedEndpointsSuccess(payload),
};

export const enhanceFirebase = compose<TInnerProps, null>(
  connect(null, mapDispatchToProps)
);
