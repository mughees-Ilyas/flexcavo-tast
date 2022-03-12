
import { all } from 'redux-saga/effects'
import telematicDataSaga from './telematicData/sagas/TelematicData.saga'
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
      telematicDataSaga()
  ])
}
