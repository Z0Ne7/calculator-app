import { ACTION } from '../constants/actionTypes';
import produce from 'immer';
import * as math from 'mathjs';

const initialState = {
  currentValue: '',
  previousValue: '',
};

const mainReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION.ADD_TO_INPUT:
        // console.log(action.data);
        if (
          action.data === '+' ||
          action.data === '-' ||
          action.data === '*' ||
          action.data === '/'
        ) {
          draft.currentValue = '';
          draft.currentValue += action.data;
          draft.previousValue += action.data;
        } else {
          // draft.currentValue = '';
          if (
            draft.currentValue === '+' ||
            draft.currentValue === '-' ||
            draft.currentValue === '*' ||
            draft.currentValue === '/'
          ) {
            draft.currentValue = '';
            draft.currentValue += action.data;
          } else {
            draft.currentValue += action.data;
          }
          draft.previousValue += action.data;
        }
        break;
      case ACTION.ALL_CLEAR:
        draft.currentValue = '';
        draft.previousValue = '';
        break;
      case ACTION.ON_EQUAL:
        draft.currentValue = math.evaluate(draft.previousValue);
        break;
      default:
        break;
    }
  });

export default mainReducer;
