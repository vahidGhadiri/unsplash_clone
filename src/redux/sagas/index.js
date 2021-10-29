import {all} from "redux-saga/effects"
import {imagesSaga} from "./images.saga";

export default function* rootSaga() {
    yield all([imagesSaga()]);
}
