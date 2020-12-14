import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { addToInput, onClear, onEqual } from './actions/mainAction';

import './components/common/Button/Button.css';

function Calculator(props) {
  const dispatch = useDispatch();
  const onAddToInput = (event) => {
    dispatch(addToInput(event.target.value));
  };
  const onHandleClear = () => {
    dispatch(onClear());
  };
  const onHandleEqual = () => {
    dispatch(onEqual());
  };
  return (
    <div className='flex justify-center items-center h-screen w-full flex-wrap'>
      <div className='flex-col'>
        <div className='bg-black'>
          <div className='flex h-10 p-2 text-yellow-400 text-right text-2xl'>
            <span className='w-full'>{props.previousValue}</span>
          </div>
          <div className='flex h-10 pr-2 text-white text-right text-2xl'>
            <span className='w-full'>{props.currentValue}</span>
          </div>
        </div>
        <div className='flex'>
          <button
            value='AC'
            className='w-1/2 bg-red-700 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onHandleClear}
          >
            AC
          </button>
          <button
            value='/'
            className='w-1/4 bg-gray-500 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            /
          </button>
          <button
            value='*'
            className='w-1/4 bg-gray-500 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            x
          </button>
        </div>
        <div className='flex'>
          <button
            value='7'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            7
          </button>
          <button
            value='8'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            8
          </button>
          <button
            value='9'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            9
          </button>
          <button
            value='-'
            className='w-1/4 bg-gray-500 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            -
          </button>
        </div>
        <div className='flex'>
          <button
            value='4'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            4
          </button>
          <button
            value='5'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            5
          </button>
          <button
            value='6'
            className='w-1/4 bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            6
          </button>
          <button
            value='+'
            className='w-1/4 bg-gray-500 text-white relative outline-button hover:text-black hover:outline-hover '
            onClick={onAddToInput}
          >
            +
          </button>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex'>
              <button
                value='1'
                className='bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
                onClick={onAddToInput}
              >
                1
              </button>
              <button
                value='2'
                className='bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
                onClick={onAddToInput}
              >
                2
              </button>
              <button
                value='3'
                className='bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
                onClick={onAddToInput}
              >
                3
              </button>
            </div>
            <div className='flex'>
              <button
                value='0'
                className='flex-grow bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
                onClick={onAddToInput}
              >
                0
              </button>
              <button
                value='.'
                className='bg-gray-600 text-white relative outline-button hover:text-black hover:outline-hover '
                onClick={onAddToInput}
              >
                .
              </button>
            </div>
          </div>
          <div className='flex-grow'>
            <button
              value='='
              className='h-full bg-blue-700 text-white relative outline-button hover:text-black hover:outline-hover '
              onClick={onHandleEqual}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    currentValue: state.mainReducer.currentValue,
    previousValue: state.mainReducer.previousValue,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
