import {call, put, select} from "redux-saga/effects"

import * as api from "../../api/api"
import {setErr, setImages} from "../actions/images.action";


export function* handleFetchImages() {
    try {
        const page = yield select(state => state.images.page)
        const response = yield call(api.fetchImages, page)
        yield  put(setImages(response.data))
    } catch (e) {
        yield put(setErr(e.message))
    }
}
