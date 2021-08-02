// @ts-nocheck
import { put, PutEffect, select } from 'redux-saga/effects';

// others
import { EFeedbackTypes } from '../../../components/Feedback/constants';

// services
import getRefDatabase from '../../../components/Firebase/services/getRefDatabase';

// store
import { addNotification } from '../../notifications/actions';
import { getDataSelector } from '../selectors';

export function* addNewEndpoint(data): Generator<PutEffect<any>> {
  const { indexOfGroup, endpointName } = data.payload;
  const groupEndpoint = (yield select(getDataSelector))[indexOfGroup];
  const path = ['data', 'groupedEndpoints', indexOfGroup, 'endpoints'];

  if (groupEndpoint.endpoints) {
    groupEndpoint.endpoints.push({ endpointName });
  } else {
    groupEndpoint.endpoints = [{ endpointName }];
  }

  try {
    yield getRefDatabase(path).set(groupEndpoint.endpoints);
    yield put(
      addNotification(
        `Endpoint has been added!`,
        'Add new endpoint',
        EFeedbackTypes.SUCCESS
      )
    );
  } catch (error) {
    yield put(addNotification(error, 'Add new endpoint', EFeedbackTypes.ERROR));
  }
}

export function* updateSomeEndpoint(data): Generator<PutEffect<any>> {
  const { indexOfGroup, indexOfEndpoint, value, restPath } = data.payload;
  const path = [
    'data',
    'groupedEndpoints',
    indexOfGroup,
    'endpoints',
    indexOfEndpoint,
    ...restPath,
  ];

  try {
    yield getRefDatabase(path).set(value);
  } catch (error) {
    yield put(addNotification(error, 'Update endpoint', EFeedbackTypes.ERROR));
  }
}
