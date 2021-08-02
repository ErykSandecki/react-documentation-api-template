import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './RequestTypeForm';

// store
import { TUpdateEndpointPayload } from '../../store/groupedEndpoints/types';
import { updateEndpoint } from '../../store/groupedEndpoints/actions';

const mapDispatchToProps = {
  updateEndpoint: (payload: TUpdateEndpointPayload) => updateEndpoint(payload),
};

export const enhanceRequestTypeForm = compose<TInnerProps, null>(
  connect(null, mapDispatchToProps)
);
