import { delay, put, takeEvery } from "redux-saga/effects";
const INCREASE = "counter/increase";
const DECREASE = "counter/decrease";
const INCREASE_ASYNC = "INCREASE_ASYNC";
const DECREASE_ASYNC = "DECREASE_ASYNC";

export const onIncrease = () => ({ type: INCREASE });
export const onDecrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

const initial = {
  number: 4,
};

function* increaseSaga() {
  yield delay(1000);
  yield put(onIncrease());
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(onDecrease());
}
export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  yield takeEvery(DECREASE_ASYNC, decreaseSaga);
}

export default function counter(state = initial, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      return state;
  }
}
