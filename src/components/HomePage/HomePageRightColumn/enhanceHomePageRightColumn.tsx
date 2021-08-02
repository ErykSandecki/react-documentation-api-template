import { connect, Selector } from 'react-redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';

// others
import { TInnerProps } from './HomePageRightColumn';
import { TUpdateConfigPayload } from '../../../store/config/types';

// store
import {
  getDataSelector,
  isPendingSelector,
} from '../../../store/config/selectors';
import { updateConfig } from '../../../store/config/actions';

const mapStateToProps: Selector<any, any> = createStructuredSelector({
  getDataSelector: getDataSelector,
  isPending: isPendingSelector,
});

const mapDispatchToProps = {
  updateConfig: (payload: TUpdateConfigPayload) => updateConfig(payload),
};

export const enhanceHomePageRightColumn = compose<TInnerProps, null>(
  connect(mapStateToProps, mapDispatchToProps)
);
