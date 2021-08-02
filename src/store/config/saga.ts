// @ts-nocheck
import { put, PutEffect } from 'redux-saga/effects';

// others
import { EFeedbackTypes } from '../../components/Feedback/constants';

// services
import getRefDatabase from '../../components/Firebase/services/getRefDatabase';

// store
import { addNotification } from '../notifications/actions';
import { updateConfigFinished } from './actions';
import { TUpdateConfigFinished } from './types';

export function* updateConfigSaga(
  data
): Generator<PutEffect<TUpdateConfigFinished>> {
  const { value, path } = data.payload;

  try {
    yield getRefDatabase(path).set(value);
  } catch (error) {
    yield put(addNotification(error, 'Update config', EFeedbackTypes.ERROR));
  }
  yield put(updateConfigFinished());
}
