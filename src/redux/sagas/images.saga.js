import {takeEvery} from "redux-saga/effects"
import {IMAGES} from "../../config/types";
import {handleFetchImages} from "../generators/images.generator";

export function* imagesSaga() {
    yield takeEvery(IMAGES.FETCH, handleFetchImages)
}