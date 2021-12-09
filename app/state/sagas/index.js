import { takeEvery, all } from 'redux-saga/effects';

import * as UserTypes from '../ducks/user/types';
import { getImagesData } from './user';

export default function* rootSaga() {
    yield all([
        // User
        yield takeEvery(UserTypes.GET_IMAGES_DATA, getImagesData)
    ]);
}