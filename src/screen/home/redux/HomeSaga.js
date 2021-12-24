import {put, takeLatest, select} from 'redux-saga/effects';
import {API} from '../../../utils/Api';

//action
import {setAllProduct} from './HomeAction';

function* sagaGetAllProduct(action) {
  try {
    let result = yield API.get('products', {per_page: 10});
    yield put(setAllProduct(result));

    console.log(result, 'result all product');
  } catch (error) {
    console.log(error, 'error get Product');
  }
}

export function* SagaHomeWorker() {
  yield takeLatest('GET_ALL_PRODUCT', sagaGetAllProduct);
}
