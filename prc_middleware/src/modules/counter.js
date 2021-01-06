const INCREASE = "counter/increase";
const DECREASE = "counter/decrease";

export const onIncrease = () => ({ type: INCREASE });
export const onDecrease = () => ({ type: DECREASE });

const initial = {
  number: 4,
};

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
