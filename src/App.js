import React from 'react';
import './components/common/Button/Button.css';

function Calculator() {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <div className=''>
        <div className='bg-black'>
          <div className='flex h-10 p-2 text-white text-right text-4xl'>
            <span className='w-full'>0</span>
          </div>
          <div className='flex h-10 pr-2 text-white text-right text-4xl'>
            <span className='w-full'>0</span>
          </div>
        </div>
        <div className='flex'>
          <button
            value='AC'
            className='w-1/2 bg-red-700 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            AC
          </button>
          <button
            value='/'
            className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            /
          </button>
          <button
            value='x'
            className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            x
          </button>
        </div>
        <div className='flex'>
          <button
            value='7'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            7
          </button>
          <button
            value='8'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            8
          </button>
          <button
            value='9'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            9
          </button>
          <button
            value='-'
            className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            -
          </button>
        </div>
        <div className='flex'>
          <button
            value='4'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            4
          </button>
          <button
            value='5'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            5
          </button>
          <button
            value='6'
            className='w-1/4 bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            6
          </button>
          <button
            value='+'
            className='w-1/4 bg-gray-500 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
          >
            +
          </button>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='flex'>
              <button
                value='1'
                className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
              >
                1
              </button>
              <button
                value='2'
                className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
              >
                2
              </button>
              <button
                value='3'
                className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
              >
                3
              </button>
            </div>
            <div className='flex'>
              <button
                value='0'
                className='flex-grow bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
              >
                0
              </button>
              <button
                value='.'
                className='bg-gray-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
              >
                .
              </button>
            </div>
          </div>
          <div className='flex-grow'>
            <button
              value='='
              className='h-full bg-blue-600 text-white relative outline-button h-65 hover:text-black hover:outline-hover '
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
