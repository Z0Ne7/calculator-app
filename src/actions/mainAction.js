import { ACTION } from '../constants/actionTypes';

export const addToInput = (data) => {
  return {
    type: ACTION.ADD_TO_INPUT,
    data,
  };
};

export const addZeroToInput = (data) => {
  return {
    type: ACTION.ADD_ZERO_TO_INPUT,
    data,
  };
};

export const addDecimal = (data) => {
  return {
    type: ACTION.ADD_DECIMAL,
    data,
  };
};

export const add = () => {
  return {
    type: ACTION.ADD,
  };
};

export const subtract = () => {
  return {
    type: ACTION.SUBTRACT,
  };
};

export const multiply = () => {
  return {
    type: ACTION.MULTIPLY,
  };
};

export const divide = () => {
  return {
    type: ACTION.DIVIDE,
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
