import { call, put } from 'redux-saga/effects';

import { CommonAction } from '../ducks/common';
import { performGetRequest } from '../axiosUtils';
import Urls from '../Urls';
import { toastMessages } from '../../utils/toastMessage';

function getParams(params) {
  return Object.entries(Object.assign({}, params)).
    map(([key, value]) => `${key}=${value}`).
    join('&');
}

export function* getImagesData(action) {
  try {
    yield put(CommonAction.startLoading());
    let endUrl = Urls.GET_IMAGES_DATA + `?` + getParams(action.payload);
    let response = yield call(performGetRequest, endUrl);
    yield put(CommonAction.stopLoading());
    action.success(response);
  } catch (error) {
    const message = error.response ? error.response && error.response.data && error.response.data.error : toastMessages.NETWORK_ERROR
    const toastData = { success: false, message: message };
    yield put(CommonAction.showToast(toastData));
    yield put(CommonAction.stopLoading());
    action.failure(error);
  }
}