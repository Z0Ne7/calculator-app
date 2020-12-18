import produce from 'immer';
import { ACTION } from '../constants/actionTypes';

const initialState = {
  input: '',
  allInput: '',
  currentValue: '',
  previousValue: '',
  operator: '',
};

const mainReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION.ADD_TO_INPUT:
        // draft.input = '';
        if (
          draft.input === '+' ||
          draft.input === '-' ||
          draft.input === 'x' ||
          draft.input === '/'
        ) {
          draft.input = '';
          draft.input += action.data;
        } else {
          draft.input += action.data;
        }
        break;
      case ACTION.ADD_ZERO_TO_INPUT:
        if (draft.input !== '') {
          if (
            draft.input === '+' ||
            draft.input === '-' ||
            draft.input === 'x' ||
            draft.input === '/'
          ) {
            draft.input = '';
            draft.input += action.data;
          } else {
            draft.input += action.data;
          }
        }
        break;
      case ACTION.ADD_DECIMAL:
        if (draft.input.indexOf('.') === -1) {
          draft.input += action.data;
        }
        break;
      case ACTION.ADD:
        draft.previousValue = draft.input;
        draft.input = '+';
        draft.operator = 'plus';
        break;
      case ACTION.SUBTRACT:
        draft.previousValue = draft.input;
        draft.input = '-';
        draft.operator = 'minus';
        break;
      case ACTION.MULTIPLY:
        draft.previousValue = draft.input;
        draft.input = 'x';
        draft.operator = 'multiply';
        break;
      case ACTION.DIVIDE:
        draft.previousValue = draft.input;
        draft.input = '/';
        draft.operator = 'divide';
        break;
      case ACTION.ALL_CLEAR:
        draft.input = '';
        draft.currentValue = '';
        draft.previousValue = '';
        draft.operator = '';
        break;
      case ACTION.ON_EQUAL:
        draft.currentValue = draft.input;
        if (draft.operator === 'plus') {
          draft.input =
            Number(draft.previousValue) + Number(draft.currentValue);
        } else if (draft.operator === 'minus') {
          draft.input =
            Number(draft.previousValue) - Number(draft.currentValue);
        } else if (draft.operator === 'multiply') {
          draft.input =
            Number(draft.previousValue) * Number(draft.currentValue);
        } else if (draft.operator === 'divide') {
          draft.input =
            Number(draft.previousValue) / Number(draft.currentValue);
        }
        break;
      default:
        break;
    }
  });

export default mainReducer;
