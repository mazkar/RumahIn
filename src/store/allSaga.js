import {all} from 'redux-saga/effects';

import {SagaHomeWorker} from '../screen/home/redux/HomeSaga';

export function* allSaga() {
  yield all([SagaHomeWorker()]);
}
