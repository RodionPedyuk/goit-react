import Type from './type';

export const counter = (state = 1, { type, payload }) => {
  switch (type) {
    case Type.INCREMENT_COUNT:
      return state + payload;
    case type.DECREMENT_COUNT:
      return state - payload;
    default:
      return state;
  }
};
