import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './SideBar';

// store
import { getDataSelector } from '../../store/groupedEndpoints/selectors';
import { addNewEndpoint } from '../../store/groupedEndpoints/actions';
import { TAddNewEndpointPayload } from '../../store/groupedEndpoints/types';

const mapDispatchToProps = {
  addNewGroup: (payload: TAddNewEndpointPayload) => addNewEndpoint(payload),
};

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  data: getDataSelector,
});

export const enhanceSideBar = compose<TInnerProps, null>(
  connect(mapStateToProps, mapDispatchToProps)
);
