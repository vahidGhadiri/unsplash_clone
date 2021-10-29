import {call, put} from "redux-saga/effects"

import * as api from "../../api/api"
import {setErr, setImages} from "../actions/images.action";


export function* handleFetchImages() {
    try {
        const response = yield call(api.fetchImages)
        yield  put(setImages(response.data))
    } catch (e) {
        yield put(setErr(e.message))
    }
}

