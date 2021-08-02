import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { addNewGroupSaga } from './sagas/groupedEndpointsSaga';
import { addNewEndpoint, updateSomeEndpoint } from './sagas/endpointsSaga';
import { EGroupedEndpointsActionsType } from './actionsType';
import { TAddNewGroup } from './types';

export function* watchGroupedEndpoints(): Generator<
  AllEffect<ForkEffect<TAddNewGroup>>
> {
  yield all([
    takeEvery(EGroupedEndpointsActionsType.ADD_NEW_GROUP, addNewGroupSaga),
    takeEvery(EGroupedEndpointsActionsType.ADD_NEW_ENDPOINT, addNewEndpoint),
    takeEvery(EGroupedEndpointsActionsType.UPDATE_ENDPOINT, updateSomeEndpoint),
  ]);
}
