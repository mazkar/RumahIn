import {put, takeLatest, select} from 'redux-saga/effects';
import {API} from '../../../utils/Api';

//action
import {setAllProduct, setLoading, setProductImage} from './HomeAction';

function* sagaGetAllProduct(action) {
  try {
    let result = yield API.get('products', {per_page: 50, category: 118});
    yield put(setAllProduct(result));

    console.log(result, 'result all product');
  } catch (error) {
    console.log(error, 'error get Product');
  } finally {
    yield put(setLoading(false));
  }
}
function* sagaGetProductImage(action) {
  try {
    let result = yield API.get('products', {per_page: 50, category: 118});
    yield put(setProductImage(result.images));

    console.log(result, 'result  product images');
  } catch (error) {
    console.log(error, 'error get Product');
  } finally {
    yield put(setLoading(false));
  }
}

export function* SagaHomeWorker() {
  yield takeLatest('GET_ALL_PRODUCT', sagaGetAllProduct);
  yield takeLatest('GET_PRODUCT_IMAGE', sagaGetProductImage);
}
