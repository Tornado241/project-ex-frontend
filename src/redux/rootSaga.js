import { all } from 'redux-saga/effects';
import { watchConfigNFT } from './sagas/configNFTSaga';
// import { watchListToken } from './sagas/listTokenSaga';
// import { watchListTransaction } from './sagas/listTransactionSaga';
// import { watchNotify } from './sagas/notifySaga';
// import { watchTransaction } from './sagas/transactionSaga';

function* rootSaga() {
  // yield all([watchConfigNFT()]);
}
export default rootSaga;
