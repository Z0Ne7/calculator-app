import { ACTION } from '../constants/actionTypes';

export const addToInput = (data) => {
  return {
    type: ACTION.ADD_TO_INPUT,
    data,
  };
};

export const onClear = () => {
  return {
    type: ACTION.ALL_CLEAR,
  };
};

export const onEqual = () => {
  return {
    type: ACTION.ON_EQUAL,
  };
};
