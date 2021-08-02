import { all, AllEffect, ForkEffect, takeEvery } from 'redux-saga/effects';

// store
import { EConfigActionsType } from './actionsType';
import { updateConfigSaga } from './saga';
import { TUpdateConfig } from './types';

export function* watchConfig(): Generator<
  AllEffect<ForkEffect<TUpdateConfig>>
> {
  yield all([takeEvery(EConfigActionsType.UPDATE_CONFIG, updateConfigSaga)]);
}
