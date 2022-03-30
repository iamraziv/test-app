import { all } from 'redux-saga/effects';
import  watchFetchProducts  from './productsSaga';
import watchFetchProduct from './productSaga';

function* rootSaga() {
    yield all([
        watchFetchProducts(),
        watchFetchProduct(),
    ])
  }

  export default rootSaga;