// @ts-nocheck
import { put, PutEffect, select } from 'redux-saga/effects';

// others
import { EFeedbackTypes } from '../../../components/Feedback/constants';

// services
import getRefDatabase from '../../../components/Firebase/services/getRefDatabase';

// store
import { addNotification } from '../../notifications/actions';
import { getDataSelector } from '../selectors';

export function* addNewGroupSaga(data): Generator<PutEffect<any>> {
  const groupedEndpoints = [...(yield select(getDataSelector))];
  const path = ['data', 'groupedEndpoints'];
  groupedEndpoints.push({ groupName: data.payload });

  try {
    yield getRefDatabase(path).set(groupedEndpoints);
    yield put(
      addNotification(
        `Group has been added!`,
        'Add new group',
        EFeedbackTypes.SUCCESS
      )
    );
  } catch (error) {
    yield put(addNotification(error, 'Add new group', EFeedbackTypes.ERROR));
  }
}
