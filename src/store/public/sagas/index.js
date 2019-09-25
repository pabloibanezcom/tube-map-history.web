import { all } from 'redux-saga/effects';
import { mainSagas } from './main';

export function* watchPublic() {
  yield all([...mainSagas]);
}
