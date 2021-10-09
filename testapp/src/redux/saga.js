import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { fetchImagesFailure, fetchImagesSuccess } from './actions';
import { FETCH_IMAGES } from './constants';

export function* fetchImagesSaga(action) {
    try {
        const response = yield axios.get('http://shibe.online/api/shibes?count=50&urls=true&httpsUrls=true', {
            params: {
                count: action.payload
            }
        })
            .then(res => {
                return res.data
            })
            .catch(err => err)
        if (response) {
            yield put(fetchImagesSuccess(response))
        }

    } catch (error) {
        yield put(fetchImagesFailure(error))
    }
}
export function* saga() {
    yield takeLatest(FETCH_IMAGES, fetchImagesSaga);

}