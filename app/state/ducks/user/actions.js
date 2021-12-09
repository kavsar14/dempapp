import * as types from './types';

export const getImagesData = (data, success, failure) => {
    return {
        type: types.GET_IMAGES_DATA,
        payload: data,
        success: (res) => success(res),
        failure: (res) => failure(res)
    }
}



