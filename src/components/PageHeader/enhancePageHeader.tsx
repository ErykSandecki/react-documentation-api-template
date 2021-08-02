import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './PageHeader';

// store
import { addNewGroup } from '../../store/groupedEndpoints/actions';

const mapDispatchToProps = {
  addNewGroup: (payload: string) => addNewGroup(payload),
};

export const enhancePageHeader = compose<TInnerProps, null>(
  connect(null, mapDispatchToProps)
);
