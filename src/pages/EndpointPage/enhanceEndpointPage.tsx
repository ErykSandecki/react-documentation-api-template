import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './EndpointPage';

// store
import { getDataSelector } from '../../store/groupedEndpoints/selectors';
import { TUpdateEndpointPayload } from '../../store/groupedEndpoints/types';
import { updateEndpoint } from '../../store/groupedEndpoints/actions';

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  data: getDataSelector,
});

const mapDispatchToProps = {
  updateEndpoint: (payload: TUpdateEndpointPayload) => updateEndpoint(payload),
};

export const enhanceEndpointPage = compose<TInnerProps, null>(
  connect(mapStateToProps, mapDispatchToProps)
);
